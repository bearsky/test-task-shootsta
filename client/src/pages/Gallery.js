import React, { useEffect } from "react"
import { Link } from "@reach/router"
import { connect } from "react-redux"
// material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
    GridList,
    GridListTile,
    useMediaQuery
} from "@material-ui/core"

// layout
import Content from "../layout/Content"
// components
import VideoItem from "../components/VideoItem"
import { fetchVideos } from "../store/actions/videos"

const Gallery = ({ fetchVideos, videos }) => {
    const classes = useStyles()
    const theme = useTheme()
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        fetchVideos()
    }, [])
    return (
        <Content>
            <h1>GALLERY</h1>
            {videos.length ? (
                <GridList
                    cellHeight={'auto'}
                    className={classes.gridList}
                    spacing={15}
                    cols={mobileScreen ? 1 : 2}
                >
                    {videos.map((tile, index) => (
                        <GridListTile key={index} >
                            <VideoItem {...tile} />
                        </GridListTile>
                    ))}
                </GridList>
            ) : <div>No videos uploaded yet!</div>}

            <br />
            <br />

            <Link to='/upload'>Go to upload</Link>
        </Content>
    )
}

const useStyles = makeStyles({
    gridList: {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
})

const mapStateToProps = state => {
    return {
        videos: state.videos
    }
}

const mapDispatchToProps = {
    fetchVideos
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery)
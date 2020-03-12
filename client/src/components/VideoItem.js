import React from "react"
// material-ui
import {
    GridListTileBar,
    IconButton,
} from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

const serverDomain = 'http://localhost:5000'

const VideoItem = ({ name, path }) => {
    return (
        <>
            <video src={`${serverDomain}${path}`} autoPlay={false} controls={true} />
            <GridListTileBar
                title={name}
                actionIcon={
                    <IconButton aria-label={`info about ${name}`} style={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                        <PlayCircleOutlineIcon />
                    </IconButton>
                }
            />
        </>
    )
}

export default VideoItem
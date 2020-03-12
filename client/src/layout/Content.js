import React from "react"
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        color: 'white',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible'
    },
})

export default function Content({ children }) {
    const classes = useStyles()
    return (
        <Container
            className={classes.root}
            maxWidth="md"
        >
            {children}
        </Container>
    )
}

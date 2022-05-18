import { makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { WebcamView } from './WebcamView';
import { VideoControlButton } from './VideoControlButton';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        width: '700px',
        maxHeight: '500px',
        paddingTop: spacing(2)
    }
}))

export const VideoRecorder = () => {
    const classes = useStyles();
    const [videoState, setVideoState] = useState(false);

    return (
        <Paper className={classes.root} elevation={3}>
            <WebcamView videoState={videoState} />
            <VideoControlButton videoState={videoState} setVideoState={setVideoState} />
            <Typography variant="subtitle2">
                Включите камеру, чтобы проверить качество видео
            </Typography>
        </Paper>
    )
}

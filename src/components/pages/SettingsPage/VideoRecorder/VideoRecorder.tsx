import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { WidgetPaper } from '../../HomePage/Widgets/WidgetPaper';
import { WebcamView } from './WebcamView';
import { VideoControlButton } from './VideoControlButton';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        minWidth: '650px'
    }
}))

export const VideoRecorder = () => {
    const classes = useStyles();
    const [videoState, setVideoState] = useState(false);

    return (
        <WidgetPaper className={classes.root}>
            <WebcamView videoState={videoState} />
            <VideoControlButton videoState={videoState} setVideoState={setVideoState} />
            <Typography variant="subtitle2">
                Включите камеру, чтобы проверить качество видео
            </Typography>
        </WidgetPaper>
    )
}

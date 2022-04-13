import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { BaseVideoControlButton, VideoState } from '../ControlButtons';
import { VideoPlug } from './VideoPlug';
import { VideoView } from './VideoView';
// import Webcam from 'react-webcam';

const useStyles = makeStyles(() => ({
    root: {
        height: '70vh',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    paper: {
        height: '100%',
        width: '100%'
    }
}));

export const WebcamView = () => {
    const classes = useStyles();

    const [videoState, setVideoState] = useState(VideoState.DISABLE);

    let content;

    if (videoState === VideoState.DISABLE) {
        content = <VideoPlug />;
    } else {
        content = <VideoView />;
    }

    return (
        <div className={classes.root}>
            {content}
            <BaseVideoControlButton videoState={videoState} onClick={setVideoState} />
        </div>
    );
};

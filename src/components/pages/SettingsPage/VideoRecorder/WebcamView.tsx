import React from 'react';
import { makeStyles } from '@material-ui/core';
import { VideoPlug } from './VideoPlug';
import { VideoView } from './VideoView';

interface Props {
    videoState: boolean;
}

const useStyles = makeStyles(() => ({
    container: {
        maxWidth: '600px',
        maxHeight: '400px',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

export const WebcamView = ({ videoState }: Props) => {
    const classes = useStyles();
    let content;

    if (!videoState) {
        content = (
            <div className={classes.container}>
                <VideoPlug />
            </div>
        )
    } else {
        content = (
            <div className={classes.container}>
                <VideoView />
            </div>
        )
    }

    return (
        <div className={classes.root}>
            {content}
        </div>
    )
}

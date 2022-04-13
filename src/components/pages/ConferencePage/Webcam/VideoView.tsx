import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import Webcam from 'react-webcam';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%'
    }
}));

export const VideoView = () => {
    const classes = useStyles();

    const videoConstraints = {
        facingMode: 'user'
    };
    return (
        <Paper className={classes.root} square>
            <Webcam mirrored width="100%" height="100%" videoConstraints={videoConstraints} />
        </Paper>
    );
};

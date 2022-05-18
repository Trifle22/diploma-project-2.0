import React, { useRef, useState } from 'react';
import { ReactMic, ReactMicStopEvent } from 'react-mic';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { ControlButtons } from './ControlButtons';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing(1),
        minWidth: '700px',
        paddingBottom: spacing(2)
    }
}))

export const AudioRecorder = () => {
    const classes = useStyles();
    const [isRecord, setIsRecord] = useState(false);
    const ref = useRef<HTMLAudioElement>(null)
    const [url, setUrl] = useState('');

    const onStop = (recordedBlob: ReactMicStopEvent) => {
        setUrl(recordedBlob.blobURL);
    }
    return (
        <Paper className={classes.root} elevation={3}>
            <ReactMic
                record={isRecord}
                onStop={onStop}
                visualSetting="frequencyBars"
                strokeColor="#3f50b5"
                backgroundColor="white"
            />
            <ControlButtons setIsRecord={setIsRecord} />
            <audio controls controlsList="nodownload" src={url} ref={ref}>
                <track kind="captions" />
            </audio>
            <Typography variant="subtitle2">
                Нажмите Старт для проверки микрофона
            </Typography>
        </Paper>
    )
}

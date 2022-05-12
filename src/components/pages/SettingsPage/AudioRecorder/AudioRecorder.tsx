import React, { useRef, useState } from 'react';
import { ReactMic, ReactMicStopEvent } from 'react-mic';
import { makeStyles } from '@material-ui/core';
import { WidgetPaper } from '../../HomePage/Widgets/WidgetPaper';
import { ControlButtons } from './ControlButtons';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing(1)
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
        <WidgetPaper>
            <div className={classes.root}>
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
            </div>
        </WidgetPaper>
    )
}

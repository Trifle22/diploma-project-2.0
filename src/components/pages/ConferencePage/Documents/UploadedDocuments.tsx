import { makeStyles } from '@material-ui/core';
import React from 'react';
import { FileCard } from './FileCard';
import { NothingLoadedMessage } from './NothingLoadedMessage';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '45%',
        overflowY: 'auto',
        height: '600px'
    }
}));

interface Props {
    files: FileList | undefined;
}

export const UploadedDocuments = ({ files }: Props) => {
    const classes = useStyles();
    const filesList = files !== undefined && Object.values(files);
    return (
        <div className={classes.root}>
            {filesList ? filesList.map(file => <FileCard name={file.name} />) : <NothingLoadedMessage />}
        </div>
    );
};

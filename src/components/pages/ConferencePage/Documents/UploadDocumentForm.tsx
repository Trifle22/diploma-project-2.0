import { makeStyles } from '@material-ui/core';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '45%',
    }
}));

interface Props {
    setFiles: Dispatch<SetStateAction<FileList | undefined>>;
}

export const UploadDocumentForm = ({ setFiles }: Props) => {
    const classes = useStyles();
    const onChange = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files) setFiles(files);
    };
    return (
        <div className={classes.root}>
            <input type="file" onChange={onChange} multiple />
        </div>
    );
};

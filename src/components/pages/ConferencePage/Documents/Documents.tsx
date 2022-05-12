import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { UploadedDocuments } from './UploadedDocuments';
import { UploadDocumentForm } from './UploadDocumentForm';
import { useUserRole } from '../../../common/hooks/useUserRole';
import { UserRole } from '../../../../types/types';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexBasis: '45%'
    }
}));

export const Documents = () => {
    const [files, setFiles] = useState<FileList>();
    const classes = useStyles();
    const isTeacher = useUserRole(UserRole.ROLE_TEACHER);
    const isModerator = useUserRole(UserRole.ROLE_MODERATOR);
    return (
        <div className={classes.root}>
            { (isTeacher || isModerator) && <UploadDocumentForm setFiles={setFiles} />}
            <UploadedDocuments files={files} />
        </div>
    );
};

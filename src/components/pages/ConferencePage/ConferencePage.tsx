import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ConferenceContainer } from './ConferenceContainer';
import { UserRole } from '../../../types/types';
import { ConferenceType } from './types';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: spacing(1),
    }
}));

export const ConferencePage = () => {
    const conference = {
        creator: {
            id: 0,
            name: 'alexander',
            roles: [UserRole.ROLE_TEACHER, UserRole.ROLE_BASE, UserRole.ROLE_MODERATOR],
        },
        participants: [
            { id: 1, name: 'alexander', roles: [UserRole.ROLE_BASE] }
        ],
        date: 1648976403310,
        duration: 60000,
        type: ConferenceType.WITH_VIDEO
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ConferenceContainer conference={conference} />
        </div>
    );
};

import React from 'react';
import { makeStyles } from '@material-ui/core';
import { GoToConferenceWidget } from './Widgets/GoToConferenceWidget';
import { CreateConferenceWidget } from './Widgets/CreateConferenceWidget';
import { useUserRole } from '../../common/hooks/useUserRole';
import { UserRole } from '../../../types/types';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        gap: spacing(5),
        paddingTop: spacing(2),
        paddingBottom: spacing(1),
        paddingLeft: spacing(2)
    }
}));

export const HomePage = () => {
    const classes = useStyles();

    const isTeacher = useUserRole(UserRole.ROLE_TEACHER);
    const isModerator = useUserRole(UserRole.ROLE_MODERATOR);

    return (
        <div className={classes.root}>
            <GoToConferenceWidget />
            {(isModerator || isTeacher) && <CreateConferenceWidget />}
        </div>
    );
};

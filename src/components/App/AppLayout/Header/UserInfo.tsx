import { makeStyles, Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LogOutButton } from './LogOutButton';
import { User } from '../../../../types/types';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing(2)
    }
}));

export const UserInfo = ({ user }: { user: User; }) => {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    const onClickLogout = useCallback(() => {
        setLoading(!loading);
        history.replace('/auth');
    }, [history, loading]);

    return (
        <div className={classes.root}>
            <Typography variant="body1" color="textPrimary">
                {user.name}
            </Typography>
            <LogOutButton
                onClick={onClickLogout}
                disabled={loading}
                data-testid="log-out-button"
            >
                ВЫЙТИ
            </LogOutButton>
        </div>
    );
};

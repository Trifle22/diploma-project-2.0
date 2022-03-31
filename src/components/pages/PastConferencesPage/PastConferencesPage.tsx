import React, { useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { PastConferencesTable } from './PastConferencesTable/PastConferencesTable';
import { getPastConferencesActionCreator } from '../../../sagas/pastConferences/getPastConferencesSaga';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingRight: spacing(1),
        paddingBottom: spacing(4)
    }
}));

export const PastConferencesPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPastConferencesActionCreator());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <Typography variant="h6">
                Завершенные конференции
            </Typography>
            <PastConferencesTable />
        </div>
    );
};

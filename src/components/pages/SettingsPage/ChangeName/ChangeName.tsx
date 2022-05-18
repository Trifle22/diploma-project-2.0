import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { ChangeNameForm } from './ChangeNameForm';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: spacing(1, 2),
        width: '30%',
    }
}))

export const ChangeName = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3}>
            <Typography variant="h6">
                Изменить имя
            </Typography>
            <ChangeNameForm />
        </Paper>
    )
}

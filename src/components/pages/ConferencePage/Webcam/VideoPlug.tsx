import { makeStyles, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../slices/user/userSelectors';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: grey[900]
    },
    text: {
        color: 'white',
    }
}));

export const VideoPlug = () => {
    const classes = useStyles();
    const user = useSelector(selectUser);
    return (
        <Paper className={classes.root} square>
            <Typography variant="h4" className={classes.text}>
                {user.name}
            </Typography>
        </Paper>
    );
};

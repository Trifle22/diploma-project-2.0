import { makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../slices/user/userSelectors';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '600px',
        width: '800px',
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
        <div className={classes.root}>
            <Typography variant="h4" className={classes.text}>
                {user.name}
            </Typography>
        </div>
    );
};

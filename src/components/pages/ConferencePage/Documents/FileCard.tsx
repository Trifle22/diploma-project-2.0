import { IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing(1)
    }
}));

interface Props {
    name: string;
}

export const FileCard = ({ name }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton>
                <GetAppIcon color="primary" />
            </IconButton>
            <Typography>
                {name}
            </Typography>
        </div>

    );
};

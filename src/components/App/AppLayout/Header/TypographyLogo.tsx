import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Logo } from './Logo';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        gap: spacing(2),
        alignItems: 'center',
    }
}));

export const TypographyLogo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Logo />
            <Typography color="primary" variant="h6">
                МИИГАиК. Конференции
            </Typography>
        </div>
    );
};

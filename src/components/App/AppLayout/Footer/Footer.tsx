import {
    AppBar, Fade, LinearProgress, makeStyles, Theme, Typography
} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
    root: {
        position: 'relative',
        backgroundColor: palette.grey[50],
        color: palette.text.primary,
        display: 'grid',
        height: spacing(4),
        gridTemplateColumns: '1fr auto',
        columnGap: spacing(1)
    },
    poweredByUniversity: {
        justifySelf: 'self-end',
        paddingRight: spacing(1)
    },
    progressBar: {
        gridColumn: '1/3'
    },
}));

export const Footer = ({ className }: { className?: string; }) => {
    const classes = useStyles();
    return (
        <AppBar className={clsx(className, classes.root)}>
            <Fade>
                <LinearProgress
                    className={classes.progressBar}
                    variant="query"
                    data-testid="footer-progress-bar"
                />
            </Fade>
            <Typography variant="subtitle2" className={classes.poweredByUniversity}>powered by MIIGAiK</Typography>
        </AppBar>
    );
};

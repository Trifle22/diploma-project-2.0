import React from 'react';
import {
    makeStyles, Paper, PaperProps, Theme
} from '@material-ui/core';

const useStyles = makeStyles<Theme>(({ spacing }) => ({
    root: {
        flexBasis: '25%',
        height: '30%',
        padding: spacing(1, 2),
        alignSelf: 'baseline'
    }
}));

export const WidgetPaper = (props: PaperProps) => {
    const classes = useStyles();
    return (
        <Paper
            elevation={3}
            {...props}
            classes={classes}
        />
    );
};

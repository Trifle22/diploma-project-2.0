import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { DialogTitle, IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'start'
    },
    header: {
        flexGrow: 1
    },
    closeButton: {
        color: theme.palette.grey[500],
        marginTop: '-8px',
        marginRight: '-12px'
    }
}));

interface Props {
    children: React.ReactNode;
    onClose: () => void;
}

export const ClosableDialogTitle = ({ children, onClose, ...restProps }: Props) => {
    const classes = useStyles();

    return (
        <DialogTitle className={classes.root} disableTypography {...restProps}>
            <Typography className={classes.header} variant="h6">{children}</Typography>
            <IconButton className={classes.closeButton} onClick={onClose}>
                <Close />
            </IconButton>
        </DialogTitle>
    );
};

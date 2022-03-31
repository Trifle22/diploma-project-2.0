/* eslint-disable react/no-unused-prop-types */
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { CancelRounded, FileCopy } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import React, { forwardRef, useCallback } from 'react';
import { handleCopyToClipboard } from '../helpers/handleCopyToClipboard';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        padding: spacing(1),
        paddingRight: spacing(2),
        borderRadius: '5px',
    },
    icons: {
        fill: 'white',
    },
    message: {
        wordWrap: 'break-word',
        maxHeight: '100px',
        maxWidth: '900px',
        flex: 1,
        overflowY: 'auto',
    }
}));

export const Notification = forwardRef<HTMLDivElement, {
    id: string | number;
    message: string;
    showCopyButton?: boolean;
    classes: Partial<ReturnType<typeof useStyles>>;
}>((props, ref) => {
    const {
        id, message, showCopyButton
    } = props;

    const classes = useStyles(props);

    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
        closeSnackbar(id);
    }, [id, closeSnackbar]);

    const copyErrorMessage = useCallback(() => {
        handleCopyToClipboard(message);
    }, [message]);

    return (
        <div ref={ref} className={classes.root} data-testid="notification">
            <IconButton onClick={handleDismiss} aria-label="cancel">
                <CancelRounded fontSize="small" className={classes.icons} />
            </IconButton>
            {showCopyButton
                && (
                    <IconButton onClick={copyErrorMessage} data-testid="copy-message-button">
                        <FileCopy fontSize="small" className={classes.icons} />
                    </IconButton>
                )}
            <Typography variant="subtitle2" className={classes.message}>
                {message}
            </Typography>

        </div>
    );
});

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(({
    root: {
        position: 'absolute',
        zIndex: 1,
        transitionDelay: ({ isLoading }: { isLoading: boolean;}) => (isLoading ? '500ms' : '0ms')
    }
}));

const backdropTransitionDuration = { enter: 400, exit: 250 };

interface Props {
    isLoading?: boolean;
}

export const VirtualTableBackdrop = ({ isLoading = false }: Props) => {
    const classes = useStyles({ isLoading });

    return (
        <Backdrop
            className={classes.root}
            open={isLoading}
            transitionDuration={backdropTransitionDuration}
        >
            <CircularProgress />
        </Backdrop>
    );
};

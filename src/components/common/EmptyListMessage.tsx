import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        padding: spacing(3),
        display: 'flex',
        justifyContent: 'center'
    }
}));

interface Props {
    hasData: boolean;
}

export const EmptyListMessage = ({ hasData }: Props) => {
    const classes = useStyles();

    return (
        <Typography color="textSecondary" classes={classes}>
            {hasData ? (
                <span>
                    Ничего не найдено
                </span>
            ) : 'Список пуст'}
        </Typography>
    );
};

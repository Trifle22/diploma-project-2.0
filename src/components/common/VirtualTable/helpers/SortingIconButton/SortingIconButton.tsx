import React from 'react';
import { IconButton } from '@material-ui/core';
import { Sort } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ColumnSortOrder, SortState } from '../../../../../types/columnSort.types';
import { useChangeColumnSortOrders } from './useChangeColumnSortOrders';

const useStyles = makeStyles({
    inverted: {
        transform: 'scaleY(-1)'
    }
});

interface Props {
    sortSettings: SortState;
    columnSortOrder: ColumnSortOrder;
}

export const SortingIconButton = ({
    sortSettings, columnSortOrder
}: Props) => {
    const { columnIndex, order } = columnSortOrder;

    const isActive = sortSettings.state[0].columnIndex === columnIndex;

    const onClick = useChangeColumnSortOrders(sortSettings, columnSortOrder);

    const classes = useStyles();

    return (
        <IconButton onClick={onClick}>
            <Sort
                className={clsx(order === 'asc' && classes.inverted)}
                color={isActive ? 'primary' : 'action'}
            />
        </IconButton>
    );
};

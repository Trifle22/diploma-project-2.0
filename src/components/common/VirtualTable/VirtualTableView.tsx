import { makeStyles } from '@material-ui/core';
import React, { useMemo } from 'react';
import { renderVirtualTableRow } from './renderVirtualTableRow';
import { VirtualTableViewProps } from './types';
import { VirtualTableBackdrop } from './helpers/VirtualTableBackdrop';
import { VirtualList } from '../VirtualList/VirtualList';
import { VirtualTableHeader } from './VirtualTableHeader';

const useStyles = makeStyles({
    tableWrapper: {
        flex: 1,
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    }
});

export const VirtualTableView = <T extends Record<K, T[K]>, K extends keyof T>(props: VirtualTableViewProps<T, K>) => {
    const {
        viewData,
        totalDataLength,
        columns,
        onClickRow,
        isLoading,
        actionBar,
        checkIsGreyRow,
        itemSize,
        idField,
        sortSettings,
        RowComponent: RowComponentProp,
        footer,
        dataTestId,
        useTooltipWhenTextOverflow,
    } = props;

    const classes = useStyles();

    const RowComponent = useMemo(() => (
        renderVirtualTableRow(
            columns,
            idField,
            onClickRow,
            checkIsGreyRow,
            RowComponentProp,
            useTooltipWhenTextOverflow,
        )
    ), [columns, idField, onClickRow, checkIsGreyRow, RowComponentProp, useTooltipWhenTextOverflow]);

    return (
        <div className={classes.tableWrapper} data-testid={dataTestId}>
            {actionBar}
            <VirtualTableBackdrop isLoading={isLoading} />
            <VirtualList
                data={viewData}
                dataTotalLength={totalDataLength}
                renderRow={RowComponent}
                header={(
                    <VirtualTableHeader
                        columns={columns}
                        sortSettings={sortSettings}
                    />
                )}
                itemSize={itemSize}
                footer={footer}
            />
        </div>
    );
};

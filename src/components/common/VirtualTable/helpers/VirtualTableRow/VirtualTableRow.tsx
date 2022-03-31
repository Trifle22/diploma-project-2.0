import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import {
    OnClickRow, VirtualTableColumn
} from '../../types';
import { CheckIsGreyRow, useVirtualTableRowStyles } from './useVirtualTableRowStyles';
import { isCustomColumn, isTextColumn } from '../../columnTypeCheckers';
import { RowTextCell } from './RowTextCell';
import { useColumnSizeStyles } from '../../useColumnSizeStyles';

interface VirtualTableRowProps<T extends Record<K, T[K]>, K extends keyof T> {
    columns: VirtualTableColumn<T>[];
    dataItem: T;
    onClickRow?: OnClickRow<T>;
    checkIsGreyRow?: CheckIsGreyRow<T>;
    useTooltipWhenTextOverflow?: boolean;
}

export const VirtualTableRow = <T extends Record<K, T[K]>, K extends keyof T>({
    columns, onClickRow: propsOnClickRow, dataItem, checkIsGreyRow, useTooltipWhenTextOverflow
}: VirtualTableRowProps<T, K>) => {
    const classes = useVirtualTableRowStyles({
        isClickable: !!propsOnClickRow,
        checkIsGreyRow,
        rowData: dataItem
    });

    const columnSizeClasses = useColumnSizeStyles({ columns });

    const onClickRow = useCallback(() => {
        propsOnClickRow?.(dataItem);
    }, [propsOnClickRow, dataItem]);

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
            className={clsx(classes.tableRow, columnSizeClasses.columnSizeStyles)}
            onClick={onClickRow}
            data-testid="virtual-table-row"
        >
            {columns.map((column, columnIndex) => {
                let cellContent;

                if (isTextColumn(column)) {
                    const { getCellText } = column;
                    cellContent = (
                        <RowTextCell useTooltipWhenTextOverflow={useTooltipWhenTextOverflow}>
                            {getCellText(dataItem)}
                        </RowTextCell>
                    );
                }

                if (isCustomColumn(column)) {
                    cellContent = (
                        <Typography component="div" noWrap>
                            {column.Cell(dataItem)}
                        </Typography>
                    );
                }

                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <React.Fragment key={columnIndex}>{cellContent}</React.Fragment>
                );
            })}
        </div>
    );
};

VirtualTableRow.defaultProps = {
    onClickRow: undefined
};

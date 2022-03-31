import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useColumnSizeStyles } from './useColumnSizeStyles';
import { DefaultHeaderCell } from './DefaultHeaderCell';
import { VirtualTableColumn } from './types';
import { SortingIconButton } from './helpers/SortingIconButton';
import { SortState } from '../../../types/columnSort.types';

const useStyles = makeStyles(({ palette }) => ({
    headerWrapper: {
        overflowY: 'scroll',
        background: palette.grey[200],
        outline: `solid 2px ${palette.grey[200]}`
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    }
}));

interface Props<T extends Record<K, T[K]>, K extends keyof T> {
    columns: VirtualTableColumn<T>[];
    sortSettings?: SortState;
}

export const VirtualTableHeader = <T extends Record<K, T[K]>, K extends keyof T>({
    columns,
    sortSettings,
}: Props<T, K>) => {
    const classes = useStyles();
    const columnSizeClasses = useColumnSizeStyles({ columns });

    return (
        <div className={clsx(columnSizeClasses.columnSizeStyles, classes.headerWrapper)}>
            {columns.map((column, index) => {
                const HeaderCell = column.Header || DefaultHeaderCell;
                const columnSortOrder = sortSettings?.state.find(cso => cso.columnIndex === index);

                const content = (
                    <>
                        <HeaderCell column={column} />
                        {sortSettings && columnSortOrder && (
                            <SortingIconButton
                                sortSettings={sortSettings}
                                columnSortOrder={columnSortOrder}
                            />
                        )}
                    </>
                );

                const { EndIcon } = column;

                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} className={classes.flex} data-testid="virtual-table-header-cell">
                        {content}
                        {EndIcon != null && <EndIcon />}
                    </div>
                );
            })}
        </div>
    );
};

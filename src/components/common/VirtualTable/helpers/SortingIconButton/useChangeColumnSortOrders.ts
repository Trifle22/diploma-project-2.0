import { useCallback } from 'react';
import { ColumnSortOrder, SortState } from '../../../../../types/columnSort.types';

export const useChangeColumnSortOrders = (
    sortSettings: SortState,
    currentColumnSortOrder: ColumnSortOrder
) => useCallback(() => {
    const { columnIndex, order } = currentColumnSortOrder;
    const newOrder = order === 'asc' ? 'desc' : 'asc';

    const newColumnSortOrders = sortSettings.state.filter(cso => cso.columnIndex !== columnIndex);
    newColumnSortOrders.unshift({
        columnIndex, order: newOrder
    });

    sortSettings.onChange(newColumnSortOrders);
}, [sortSettings, currentColumnSortOrder]);

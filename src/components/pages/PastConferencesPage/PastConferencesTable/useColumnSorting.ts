import { useMemo, useState } from 'react';
import { ColumnSortOrder } from '../../../../types/columnSort.types';

export const useColumnSorting = () => {
    const initialColumnSortOrders: ColumnSortOrder[] = [
        { columnIndex: 4, order: 'asc' },
        { columnIndex: 3, order: 'asc' },
        { columnIndex: 2, order: 'asc' },
        { columnIndex: 1, order: 'asc' },
        { columnIndex: 0, order: 'asc' },
    ];

    const [columnSortOrders, setColumnSortOrders] = useState(initialColumnSortOrders);

    return useMemo(() => ({
        state: columnSortOrders, onChange: setColumnSortOrders
    }), [columnSortOrders, setColumnSortOrders]);
};

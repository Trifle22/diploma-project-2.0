import { useMemo } from 'react';
import { SortState } from '../../../../../types/columnSort.types';
import {
    ComparatorFn, VirtualTableColumn
} from '../../types';
import {
    combineComparators, sortImmutably
} from './helpers';
import { getColumnComparator } from './getColumnComparator';

interface Arg<T extends Record<K, T[K]>, K extends keyof T | 'id'> {
    columns: VirtualTableColumn<T>[];
    data: T[];
    sortSettings: SortState | undefined;
}

export const useSortedData = <T extends Record<K, T[K]>, K extends keyof T | 'id'>({
    columns, data, sortSettings
}: Arg<T, K>): T[] => useMemo(() => {
    if (!sortSettings || sortSettings.state.length === 0) {
        return data;
    }

    const comparatorList: ComparatorFn<T>[] = [];

    sortSettings.state.forEach(sortingState => {
        const { columnIndex, order } = sortingState;
        const col = columns[columnIndex];
        const columnComparator = getColumnComparator(col, order);

        if (columnComparator) {
            comparatorList.push(columnComparator);
        }
    });

    const finalComparator = combineComparators(comparatorList);

    return sortImmutably(data, finalComparator);
}, [columns, data, sortSettings]);

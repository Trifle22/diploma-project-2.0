import { ComparatorFn, VirtualTableColumn } from '../../types';
import { isCustomColumn, isTextColumn } from '../../columnTypeCheckers';
import { SortOrder } from '../../../../../types/columnSort.types';

const anyComparator: ComparatorFn<any> = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    return String(a).localeCompare(b);
};

export const getColumnComparator = <T>(
    column: VirtualTableColumn<T>,
    order: SortOrder
): ComparatorFn<T> => function columnComparator(a, b) {
    let compareResult = 0;

    if (isTextColumn(column)) {
        const { getCellText } = column;

        const aSortValue = getCellText(a);
        const bSortValue = getCellText(b);

        compareResult = anyComparator(aSortValue, bSortValue);
    }

    if (isCustomColumn(column) && column.getSortValue) {
        const { getSortValue } = column;

        const aSortValue = getSortValue(a);
        const bSortValue = getSortValue(b);
        compareResult = anyComparator(aSortValue, bSortValue);
    }

    const coefficient = order === 'asc' ? 1 : -1;
    return coefficient * compareResult;
};

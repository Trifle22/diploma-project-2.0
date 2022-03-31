import { ComparatorFn } from '../../types';

export function combineComparators<T>(comparatorList: ComparatorFn<T>[]): ComparatorFn<T> {
    return (a, b) => comparatorList.find((comp) => comp(a, b) !== 0)?.(a, b) ?? 0;
}

export function sortImmutably<T>(data: T[], comparator: ComparatorFn<T>) {
    const sortedDataClone = [...data];

    sortedDataClone.sort(comparator);

    return sortedDataClone;
}

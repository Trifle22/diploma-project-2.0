import {
    CustomColumn, VirtualTableColumn
} from './types';
import { isCustomColumn, isTextColumn } from './columnTypeCheckers';

export const createSearchSettings = <T extends Record<string, unknown>>(
    columns: VirtualTableColumn<T>[]
) => {
    const customColumnSearchStringGetters = (
        (columns
            .filter(column => (
                isCustomColumn(column) && column.getSearchValue
            )) as Pick<Required<CustomColumn<T>>, 'getSearchValue'>[]
        )
            .map(column => column.getSearchValue)
    );
    const textColumnSearchStringGetters = columns.filter(isTextColumn).map(column => column.getCellText);

    return {
        searchKeys: [],
        additionalSearchStringGetters: [...customColumnSearchStringGetters, ...textColumnSearchStringGetters]
    };
};

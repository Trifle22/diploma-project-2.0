import React, { useMemo } from 'react';
import { SearchBarComponent as SearchBarComponentType, VirtualTableColumn } from './types';
import { SearchBar } from '../SearchBar';
import { createSearchSettings } from './createSearchSettings';

interface Props<T extends Record<keyof T, unknown>> {
    SearchBarComponent?: SearchBarComponentType<T>;
    columns: VirtualTableColumn<T>[];
    items: T[];
    onFilter: (filteredItems: T[]) => void;
    width?: string;
}

export const VirtualTableSearchBar = <T extends Record<keyof T, unknown>>({
    SearchBarComponent = SearchBar,
    columns,
    items,
    onFilter,
    width
}: Props<T>) => {
    const searchSettings = useMemo(() => createSearchSettings(columns), [columns]);

    return (
        <SearchBarComponent
            searchSettings={searchSettings}
            items={items}
            onFilter={onFilter}
            width={width}
            data-testid="virtual-table-searchbar"
        />
    );
};

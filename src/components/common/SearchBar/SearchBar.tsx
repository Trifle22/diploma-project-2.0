import React, { useState } from 'react';
import { StatelessSearchBar, StatelessSearchBarProps } from './StatelessSearchBar';

export type SearchBarProps<T extends object> = Omit<StatelessSearchBarProps<T>, 'searchText' | 'onSearchTextChange'>;

export const SearchBar = <T extends object>(props: SearchBarProps<T>) => {
    const [searchText, onSearchTextChange] = useState('');

    return (
        <StatelessSearchBar
            searchText={searchText}
            onSearchTextChange={onSearchTextChange}
            {...props}
        />
    );
};

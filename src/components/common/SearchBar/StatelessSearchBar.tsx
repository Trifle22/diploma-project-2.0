import React, {
    ChangeEvent, useCallback, useMemo
} from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { createFilterItemsFunc, SearchSettings } from './createFilterItemsFunc';
import { useStyles } from './useStyles';
import { useDebounceEffect } from './useDebounceEffect';

interface SearchBarProps<T extends object> {
    searchText: string;
    onSearchTextChange: (value: string) => void;
    items: T[];
    onFilter: (filteredItems: T[]) => void;
    searchSettings: SearchSettings<T>;
    width?: string;
}

export type StatelessSearchBarProps<T extends object> = SearchBarProps<T> & TextFieldProps;

export const StatelessSearchBar = <T extends object>(
    props: StatelessSearchBarProps<T>
) => {
    const {
        searchText,
        onSearchTextChange,
        items,
        onFilter,
        searchSettings,
        ...rest
    } = props;

    const filterItems = useMemo(
        () => createFilterItemsFunc(items, searchSettings),
        [items, searchSettings]
    );

    const filterItemAndInvokeCallback = useCallback(() => {
        const filteredItems = filterItems(searchText);

        onFilter(filteredItems);
    }, [filterItems, searchText, onFilter]);

    useDebounceEffect(filterItemAndInvokeCallback);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onSearchTextChange(event.target.value);
    }, [onSearchTextChange]);

    const classes = useStyles(props);

    return (
        <TextField
            type="search"
            label="Поиск"
            value={searchText}
            onChange={onChange}
            {...rest}
            classes={classes}
        />
    );
};

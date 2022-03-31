import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { SearchBar } from '../SearchBar';
import { VirtualTableProps } from './types';
import { useSortedData } from './helpers/useSortedData';
import { VirtualTableSearchBar } from './VirtualTableSearchBar';
import { VirtualTableView } from './VirtualTableView';

const useStyles = makeStyles(({ spacing }) => ({
    actionBar: {
        margin: spacing(1),
        display: 'flex',
        gap: `${spacing(2)}px`
    }
}));

export const VirtualTable = <T extends Record<K, T[K]>, K extends keyof T | 'id'>({
    data,
    withSearch,
    SearchBarComponent = SearchBar,
    columns,
    searchBarWidth,
    actionBar,
    idField = 'id' as K,
    itemSize,
    sortSettings,
    ...rest
}: VirtualTableProps<T, K>) => {
    const classes = useStyles();

    const sortedData = useSortedData<T, K>({
        columns, data, sortSettings
    });

    const [filteredData, setFilteredData] = useState(sortedData);

    const viewData = withSearch ? filteredData : sortedData;

    const searchBarElement = withSearch ? (
        <VirtualTableSearchBar
            SearchBarComponent={SearchBarComponent}
            columns={columns}
            items={sortedData}
            onFilter={setFilteredData}
            width={searchBarWidth}
        />
    ) : null;

    const actionBarWithSearch = (
        <div className={classes.actionBar}>
            {searchBarElement}
            {actionBar}
        </div>
    );

    return (
        <VirtualTableView
            viewData={viewData}
            idField={idField}
            totalDataLength={sortedData.length}
            actionBar={actionBarWithSearch}
            columns={columns}
            itemSize={itemSize}
            sortSettings={sortSettings}
            {...rest}
        />
    );
};

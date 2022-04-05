import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { VirtualTable } from '../../../common/VirtualTable/VirtualTable';
import { columns } from './columns';
import { selectPastConferences } from '../../../../slices/pastConferences/pastConferencesSelectors';
import { useColumnSorting } from './useColumnSorting';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        flex: 1
    }
}));

export const PastConferencesTable = () => {
    const classes = useStyles();
    const pastConferences = useSelector(selectPastConferences);

    const sortSettings = useColumnSorting();

    return (
        <div className={classes.root}>
            <VirtualTable
                withSearch
                columns={columns}
                data={pastConferences}
                sortSettings={sortSettings}
            />
        </div>
    );
};

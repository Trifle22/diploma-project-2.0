import { Typography } from '@material-ui/core';
import React from 'react';
import { VirtualTableColumn } from './types';

interface Props<T> {
    column: VirtualTableColumn<T>;
}

export const DefaultHeaderCell = <T, >({ column }: Props<T>) => (
    <Typography
        component="div"
        noWrap
    >
        {column.title}
    </Typography>
);

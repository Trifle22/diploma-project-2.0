import { ListChildComponentProps } from 'react-window';
import React from 'react';
import { CheckIsGreyRow } from './helpers/VirtualTableRow/useVirtualTableRowStyles';
import { VirtualTableRow } from './helpers/VirtualTableRow/VirtualTableRow';
import { OnClickRow, RowComponentType, VirtualTableColumn } from './types';

export function renderVirtualTableRow<T extends Record<K, T[K]>, K extends keyof T>(
    columns: VirtualTableColumn<T>[],
    idField: K,
    onClickRow?: OnClickRow<T>,
    checkIsGreyRow?: CheckIsGreyRow<T>,
    RowComponent?: RowComponentType<T, K>,
    useTooltipWhenTextOverflow?: boolean,
) {
    return ({
        style, data, index
    }: ListChildComponentProps) => {
        const dataItem = data[index];

        const content = (
            <VirtualTableRow
                columns={columns}
                onClickRow={onClickRow}
                dataItem={dataItem}
                checkIsGreyRow={checkIsGreyRow}
                useTooltipWhenTextOverflow={useTooltipWhenTextOverflow}
            />
        );

        if (RowComponent) {
            return (
                <RowComponent
                    rowData={dataItem}
                    style={style}
                    key={dataItem[idField]}
                >
                    {content}
                </RowComponent>
            );
        }

        return (
            <div style={style} key={dataItem[idField]}>{content}</div>
        );
    };
}

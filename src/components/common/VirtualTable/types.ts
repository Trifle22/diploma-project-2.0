import {
    ComponentType, CSSProperties, ReactNode, ReactText
} from 'react';
import { SearchBarProps } from '../SearchBar/SearchBar';
import { CheckIsGreyRow } from './helpers/VirtualTableRow/useVirtualTableRowStyles';
import { SortState } from '../../../types/columnSort.types';

export type ComparatorFn<T> = (a: T, b: T) => number

export interface BaseColumn<T> {
    title?: string;
    width?: string;
    Header?: ComponentType<{ column: VirtualTableColumn<T>; }>;
    EndIcon?: ComponentType;
}

export interface CustomColumn<T> extends BaseColumn<T> {
    Cell: (row: T) => ReactNode;
    getSearchValue?: (row: T) => string | undefined | null;
    getSortValue?: (row: T) => (string | undefined | null) | number;
}

export interface TextColumn<T> extends BaseColumn<T> {
    getCellText: (row: T) => ReactText | undefined | null;
}

export type VirtualTableColumn<T> = CustomColumn<T> | TextColumn<T>;

export type OnClickRow<T> = (row: T) => void

export interface RowComponentProps<T extends Record<K, T[K]>, K extends keyof T> {
    style: CSSProperties;
    rowData: T;
    children: ReactNode;
}

export type RowComponentType<T extends Record<K, T[K]>, K extends keyof T> = ComponentType<RowComponentProps<T, K>>;

interface RestVirtualTableProps<T extends Record<K, T[K]>, K extends keyof T> {
    columns: VirtualTableColumn<T>[];
    idField: K;
    sortSettings?: SortState;
    actionBar?: ReactNode;
    onClickRow?: OnClickRow<T>;
    isLoading?: boolean;
    checkIsGreyRow?: CheckIsGreyRow<T>;
    RowComponent?: RowComponentType<T, K>;
    footer?: ReactNode;
    useTooltipWhenTextOverflow?: boolean;
    dataTestId?: string;
}

export interface VirtualTableViewProps<T extends Record<K, T[K]>, K extends keyof T>
    extends RestVirtualTableProps<T, K>
{
    viewData: T[];
    totalDataLength: number;
    actionBar: ReactNode;
    itemSize?: number;
}

export interface SearchBarComponent<T extends Record<keyof T, unknown>> {
    (props: SearchBarProps<T>): JSX.Element;
}

export interface VirtualTableProps<T extends Record<K, T[K]>, K extends keyof T | 'id'>
    extends Omit<RestVirtualTableProps<T, K>, 'idField'>
{
    data: T[];
    idField?: K;
    withSearch?: boolean;
    SearchBarComponent?: SearchBarComponent<T>;
    searchBarWidth?: string;
    itemSize?: number;
}

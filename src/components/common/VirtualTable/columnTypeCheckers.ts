import { CustomColumn, VirtualTableColumn, TextColumn } from './types';

export function isCustomColumn<T>(column: VirtualTableColumn<T>): column is CustomColumn<T> {
    return 'Cell' in column;
}

export function isTextColumn<T>(column: VirtualTableColumn<T>): column is TextColumn<T> {
    return 'getCellText' in column;
}

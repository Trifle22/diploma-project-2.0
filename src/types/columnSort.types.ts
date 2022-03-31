export type SortOrder = 'asc' | 'desc'

export interface ColumnSortOrder {
    columnIndex: number;
    order: SortOrder;
}

export interface SortState {
    state: ColumnSortOrder[];
    onChange: (newColumnSortOrders: ColumnSortOrder[]) => void;
}

export interface SortSettings {
    processId: number;
    sortSettings: ColumnSortOrder[];
}

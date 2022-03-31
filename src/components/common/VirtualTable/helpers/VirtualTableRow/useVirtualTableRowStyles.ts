import { makeStyles, Theme } from '@material-ui/core/styles';

export interface CheckIsGreyRow<T> {
    (rowData: T): boolean;
}

export interface VirtualTableRowStyleProps<T> {
    isClickable: boolean;
    rowData: T;
    checkIsGreyRow?: CheckIsGreyRow<T>;
}

function getBackgroundColor<T>(
    theme: Theme,
    { checkIsGreyRow, rowData }: VirtualTableRowStyleProps<T>
) {
    if (checkIsGreyRow?.(rowData)) {
        return theme.palette.grey[300];
    }

    return 'unset';
}

function getHoverBackgroundColor<T>(
    theme: Theme,
    { checkIsGreyRow, rowData, isClickable }: VirtualTableRowStyleProps<T>
) {
    const { palette } = theme;

    if (!isClickable) {
        return 'unset';
    }

    if (checkIsGreyRow?.(rowData)) {
        return palette.grey[400];
    }

    return palette.grey[100];
}

export const useVirtualTableRowStyles = makeStyles<Theme, VirtualTableRowStyleProps<any>>(theme => ({
    tableRow: {
        height: '100%',
        alignItems: 'center',
        cursor: ({ isClickable }) => (isClickable ? 'pointer' : 'auto'),
        transition: 'all 300ms ease 0s',
        borderBottom: '2px solid rgba(0, 0, 0, 0.04)',
        backgroundColor: props => getBackgroundColor(theme, props),
        '&:hover': {
            backgroundColor: props => getHoverBackgroundColor(theme, props)
        }
    }
}));

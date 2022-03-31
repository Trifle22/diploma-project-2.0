import { makeStyles, Theme } from '@material-ui/core/styles';
import { VirtualTableColumn } from './types';

interface ColumnsStyleProps<T> {
    columns: VirtualTableColumn<T>[];
}

const getGridTemplateColumns = ({ columns }: ColumnsStyleProps<any>) => {
    const widths = columns.map(column => {
        const { width } = column;

        if (width) {
            return width;
        }

        return '1fr';
    });

    return widths.join(' ');
};

export const useColumnSizeStyles = makeStyles(({ spacing }: Theme) => ({
    columnSizeStyles: {
        display: 'grid',
        gridGap: spacing(1),
        gridAutoFlow: 'column',
        gridTemplateColumns: getGridTemplateColumns,
        padding: spacing(0, 1),
        alignItems: 'center'
    }
}));

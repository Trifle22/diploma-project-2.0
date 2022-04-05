/* eslint-disable react/function-component-definition,react/no-unused-prop-types */
import { makeStyles, Theme, Typography } from '@material-ui/core';
import React, { ComponentType, ReactNode } from 'react';
import { ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { renderAutosizeChildren } from './renderAutosizeChildren';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
    autoSizerContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    virtualizedRoot: {
        flex: 1,
        outline: `solid 2px ${palette.grey[200]}`,
        minHeight: '300px'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: spacing(1),
        gap: spacing(3)
    },
    totalLabel: {
        color: palette.grey[400]
    }
}));

type Classes = Partial<ReturnType<typeof useStyles>>;

export interface VirtualListProps<T> {
    data: T[];
    renderRow: ComponentType<ListChildComponentProps>;
    dataTotalLength?: number;
    header?: ReactNode;
    itemSize?: number;
    classes?: Classes;
    footer?: ReactNode;
    dataTestid?: string;
}

export function VirtualList<T>(props: VirtualListProps<T>) {
    const classes = useStyles(props);
    const {
        data,
        dataTotalLength,
        header,
        footer,
        dataTestid
    } = props;

    const tableHeaderAndBody = (
        <>
            {header}
            <div className={classes.virtualizedRoot}>
                <AutoSizer>
                    {renderAutosizeChildren(props)}
                </AutoSizer>
            </div>
        </>
    );

    return (
        <div className={classes.autoSizerContainer} data-testid={dataTestid}>
            {tableHeaderAndBody}
            {dataTotalLength != null && (
                <div className={classes.footer}>
                    <Typography
                        variant="caption"
                        className={classes.totalLabel}
                        data-testid="total-elements-label"
                    >
                        {`Показано элементов: ${data.length} из ${dataTotalLength}`}
                    </Typography>
                    {footer != null && footer}
                </div>
            )}
        </div>
    );
}

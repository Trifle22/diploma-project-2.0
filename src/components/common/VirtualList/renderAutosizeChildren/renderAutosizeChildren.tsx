import React from 'react';
import { FixedSizeList } from 'react-window';
import { styled } from '@material-ui/core';
import { VirtualListProps } from '../VirtualList';
import { Size } from '../../../../types/types';
import { EmptyListMessage } from '../../EmptyListMessage';

const Container = styled('div')({ position: 'absolute' });

export function renderAutosizeChildren<T>({
    data,
    dataTotalLength,
    renderRow,
    itemSize = 58
}: VirtualListProps<T>) {
    return (size: Size) => {
        const { width, height } = size;

        return (
            <Container>
                {data.length
                    ? (
                        <FixedSizeList
                            itemSize={itemSize}
                            itemCount={data.length}
                            width={width}
                            height={height}
                            itemData={data}
                        >
                            {renderRow}
                        </FixedSizeList>
                    )
                    : (
                        <div style={size}>
                            <EmptyListMessage hasData={!!dataTotalLength} />
                        </div>
                    )}
            </Container>
        );
    };
}

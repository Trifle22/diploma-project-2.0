import React from 'react';
import { Typography } from '@material-ui/core';
import { OverflowTooltipTypography } from '../../../OverflowTooltipTypography';

interface Props {
    children: React.ReactText | undefined | null;
    useTooltipWhenTextOverflow?: boolean;
}

export const RowTextCell = ({ children, useTooltipWhenTextOverflow }: Props) => {
    const TypographyComponent = useTooltipWhenTextOverflow ? OverflowTooltipTypography : Typography;

    return (
        <TypographyComponent component="div" noWrap>{children}</TypographyComponent>
    );
};

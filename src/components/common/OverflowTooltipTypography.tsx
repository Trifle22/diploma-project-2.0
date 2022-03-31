import React, {
    ReactText, useCallback, useEffect, useRef, useState
} from 'react';
import {
    makeStyles, Tooltip, Typography, TypographyProps
} from '@material-ui/core';
import { createDebouncedFunction } from '../helpers/createDebouncedFunction';

interface Props extends TypographyProps<React.ElementType> {
    children: React.ReactText | undefined | null;
}

const useStyles = makeStyles({
    root: {
        display: 'block'
    }
});

export const OverflowTooltipTypography = (props: Props) => {
    const { children } = props;

    const typographyRef = useRef<null | HTMLElement>(null);
    const [title, setTitle] = useState('' as ReactText);

    const recalculateTitle = useCallback(() => {
        const { current: typographyElem } = typographyRef;
        if (children != null && typographyElem != null && typographyElem.scrollWidth > typographyElem.offsetWidth) {
            setTitle(children);
        } else {
            setTitle('');
        }
    }, [children]);

    useEffect(() => {
        recalculateTitle();

        const [recalculateTitleWithDebounce, clearTimeout] = createDebouncedFunction(recalculateTitle, 1000);

        window.addEventListener('resize', recalculateTitleWithDebounce);

        return () => {
            window.removeEventListener('resize', recalculateTitleWithDebounce);
            clearTimeout();
        };
    }, [recalculateTitle]);

    const classes = useStyles();

    return (
        <Tooltip title={title ?? ''}>
            <Typography
                noWrap
                ref={typographyRef}
                {...props}
                classes={classes}
            />
        </Tooltip>
    );
};

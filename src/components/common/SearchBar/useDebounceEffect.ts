import {
    useEffect, useRef
} from 'react';

export const useDebounceEffect = (
    effect: () => void,
    timeout = 200
) => {
    const debounceTimeoutRef = useRef<number>();
    const isFirstCallRef = useRef(true);

    useEffect(() => {
        if (isFirstCallRef.current) {
            isFirstCallRef.current = false;
            effect();
            return undefined;
        }

        clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = window.setTimeout(effect, timeout);

        return () => { clearTimeout(debounceTimeoutRef.current); };
    }, [effect, timeout]);
};

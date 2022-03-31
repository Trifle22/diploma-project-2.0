export const createDebouncedFunction = (
    func: (...args: any) => any,
    ms: number
) => {
    let timeoutId: number | undefined;

    const clearDebounceTimeout = () => {
        clearTimeout(timeoutId);
    };

    const debouncedFunction = () => {
        clearDebounceTimeout();
        timeoutId = window.setTimeout(func, ms);
    };

    return [debouncedFunction, clearDebounceTimeout];
};

export const showError = (error: string) => {
    if (process.env.NODE_ENV !== 'test') {
        // eslint-disable-next-line no-console
        console.warn('❌ ', error);
    }
};

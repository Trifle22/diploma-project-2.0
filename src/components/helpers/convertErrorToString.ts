export const convertErrorToString = (error: any) => {
    if (error instanceof Error) {
        return error.message;
    }

    if (typeof error === 'object') {
        return JSON.stringify(error);
    }

    // primitive types or undefined
    return error?.toString() || '';
};

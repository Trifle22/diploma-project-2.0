const getRequestIdSuffix = (requestId?: string) => {
    if (requestId == null) {
        return '';
    }

    return `/${requestId}`;
};

export const getFetcherKey = (keyPattern: { toString: () => string; }, requestId?: string) => (
    `fetcherKey/${keyPattern.toString()}${getRequestIdSuffix(requestId)}`
);

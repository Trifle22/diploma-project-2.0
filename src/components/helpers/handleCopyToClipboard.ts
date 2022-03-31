import React from 'react';

export const handleCopyToClipboard = (text: React.ReactText): void => {
    navigator.clipboard.writeText(String(text));
};

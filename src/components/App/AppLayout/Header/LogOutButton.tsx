import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';

export const LogOutButton = (props: ButtonProps) => (
    <Button
        variant="outlined"
        size="small"
        color="primary"
        {...props}
    />
);

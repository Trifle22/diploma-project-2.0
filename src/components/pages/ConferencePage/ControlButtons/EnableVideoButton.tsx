import { IconButton } from '@material-ui/core';
import React from 'react';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

interface Props {
    onClick: () => void;
}

export const EnableVideoButton = ({ onClick }: Props) => (
    <IconButton onClick={onClick} color="primary">
        <VideocamOffIcon />
    </IconButton>
);

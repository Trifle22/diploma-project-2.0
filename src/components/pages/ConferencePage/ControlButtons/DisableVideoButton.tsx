import React from 'react';
import { IconButton } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';

interface Props {
    onClick: () => void;
}

export const DisableVideoButton = ({ onClick }: Props) => (
    <IconButton onClick={onClick} color="primary">
        <VideocamIcon />
    </IconButton>
);

import { IconButton } from '@material-ui/core';
import React from 'react';
import MicOffIcon from '@material-ui/icons/MicOff';

interface Props {
    onClick: () => void;
}

export const EnableAudioButton = ({ onClick }: Props) => (
    <IconButton onClick={onClick} color="primary">
        <MicOffIcon />
    </IconButton>
);

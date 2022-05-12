import React from 'react';
import { IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';

interface Props {
    onClick: () => void;
}

export const DisableAudioButton = ({ onClick }: Props) => (
    <IconButton onClick={onClick} color="primary">
        <MicIcon />
    </IconButton>
);

import React, { useCallback, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { List } from '@material-ui/icons';
import { ParticipantsListDialog } from './ParticipantsListDialog';
import { User } from '../../../../types/types';

interface Props {
    participantsList: User[];
}

export const ShowParticipantsListButton = ({ participantsList }: Props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const onClick = useCallback(() => {
        setIsDialogOpen(true);
    }, [setIsDialogOpen]);

    const onClose = useCallback(() => {
        setIsDialogOpen(false);
    }, [setIsDialogOpen]);

    return (
        <>
            <IconButton onClick={onClick}>
                <List />
            </IconButton>
            <ParticipantsListDialog
                isOpen={isDialogOpen}
                onClose={onClose}
                participantsList={participantsList}
            />
        </>
    );
};

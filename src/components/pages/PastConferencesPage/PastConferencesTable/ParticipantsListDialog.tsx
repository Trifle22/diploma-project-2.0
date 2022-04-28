import { Dialog, DialogContent, makeStyles } from '@material-ui/core';
import React from 'react';
import { ClosableDialogTitle } from '../../../common/ClosableDialogTitle';
import { VirtualTable } from '../../../common/VirtualTable/VirtualTable';
import { participantsListColumns } from './participantsListColumns';
import { User } from '../../../../types/types';

interface Props {
    participantsList: User[];
    onClose: () => void;
    isOpen: boolean;
}

const useStyles = makeStyles(() => ({
    paper: {
        minHeight: '150px'
    }
}));

export const ParticipantsListDialog = ({ onClose, participantsList, isOpen }: Props) => {
    const classes = useStyles();

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            classes={classes}
            fullWidth
            maxWidth="lg"
        >
            <ClosableDialogTitle onClose={onClose}>Список участников</ClosableDialogTitle>
            <DialogContent>
                <VirtualTable data={participantsList} columns={participantsListColumns} />
            </DialogContent>
        </Dialog>
    );
};

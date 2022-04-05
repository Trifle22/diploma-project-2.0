import React from 'react';
import { VirtualTableColumn } from '../../../common/VirtualTable/types';
import { PastConference } from './types';
import { columnWidths } from './columnWidths';
import { ShowParticipantsListButton } from './ShowParticipantsListButton';
import { getDateFromDuration } from '../../../helpers/getDateFromDuration';

export const columns: VirtualTableColumn<PastConference>[] = [
    {
        getCellText: ({ id }) => id,
        title: 'ID',
        width: columnWidths.id
    },
    {
        getCellText: ({ date }) => new Date(date).toLocaleDateString(),
        title: 'Дата',
        width: columnWidths.date
    },
    {
        getCellText: ({ duration }) => getDateFromDuration(duration),
        title: 'Длительность',
        width: columnWidths.duration,
        getSortValue: ({ duration }) => duration
    },
    {
        getCellText: ({ participants }) => participants,
        title: 'Кол-во участников',
        width: columnWidths.participants
    },
    {
        title: 'Показать участников',
        Cell: ({ participantsList }) => <ShowParticipantsListButton participantsList={participantsList} />,
        getSortValue: ({ participantsList }) => participantsList.length
    }
];

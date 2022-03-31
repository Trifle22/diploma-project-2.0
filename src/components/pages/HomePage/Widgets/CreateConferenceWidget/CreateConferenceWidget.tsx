import React from 'react';
import { Typography } from '@material-ui/core';
import { WidgetPaper } from '../WidgetPaper';
import { CreateConferenceForm } from './CreateConferenceForm';

export const CreateConferenceWidget = () => (
    <WidgetPaper>
        <Typography variant="h6">
            Создать конференцию
        </Typography>
        <CreateConferenceForm />
    </WidgetPaper>
);

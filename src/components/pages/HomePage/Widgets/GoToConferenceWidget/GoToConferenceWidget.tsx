import { Typography } from '@material-ui/core';
import React from 'react';
import { WidgetPaper } from '../WidgetPaper';
import { GoToConferenceForm } from './GoToConferenceForm';

export const GoToConferenceWidget = () => (
    <WidgetPaper>
        <Typography variant="h6">
            Перейти к конференции
        </Typography>
        <GoToConferenceForm />
    </WidgetPaper>
);

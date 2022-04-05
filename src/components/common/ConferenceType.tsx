import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import VideocamIcon from '@material-ui/icons/Videocam';
import { ConferenceType as ConferenceTypeEnum } from '../pages/ConferencePage/types';

export type ConferenceTypeType =
    ConferenceTypeEnum.WITH_VIDEO | ConferenceTypeEnum.WITHOUT_VIDEO | ConferenceTypeEnum.ONLY_DEMONSTRATION

const useStyles = makeStyles(({ spacing }) => ({
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing(1)
    }
}));

interface Props {
    type: ConferenceTypeType;
}

export const ConferenceType = ({ type }: Props) => {
    const classes = useStyles();

    let content;

    if (type === ConferenceTypeEnum.WITHOUT_VIDEO) {
        content = (
            <Typography className={classes.content}>
                Без видео
                <VideocamOffIcon color="primary" />
            </Typography>
        );
    } else if (type === ConferenceTypeEnum.WITH_VIDEO) {
        content = (
            <Typography className={classes.content}>
                С видео
                <VideocamIcon color="primary" />
            </Typography>
        );
    } else {
        content = (
            <Typography className={classes.content}>
                Только демонстрация
                <PersonalVideoIcon color="primary" />
            </Typography>
        );
    }
    return content;
};

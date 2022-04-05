import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { getDateFromDuration } from '../../helpers/getDateFromDuration';
import { ConferenceType, ConferenceTypeType } from '../../common/ConferenceType';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing(1)
    }
}));

interface Props {
    creator: string;
    date: number;
    duration: number;
    type: ConferenceTypeType;
}

export const ConfDescription = ({
    creator, type, date, duration
}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>
                {`Создатель: ${creator}`}
            </Typography>
            <Typography>
                {`Дата создания: ${new Date(date).toLocaleDateString()}`}
            </Typography>
            <Typography>
                {`Длительность: ${getDateFromDuration(duration)}`}
            </Typography>
            <ConferenceType type={type} />
        </div>
    );
};

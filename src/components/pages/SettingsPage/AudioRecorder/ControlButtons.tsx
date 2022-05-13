import React, { Dispatch, SetStateAction } from 'react';
import { Button, makeStyles } from '@material-ui/core';

interface Props {
    setIsRecord: Dispatch<SetStateAction<boolean>>;
}

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing(1)
    }
}))

export const ControlButtons = ({ setIsRecord }: Props) => {
    const classes = useStyles();
    const startRecord = () => {
        setIsRecord(true);
    }

    const stopRecord = () => {
        setIsRecord(false);
    }
    return (
        <div className={classes.root}>
            <Button onClick={startRecord} color="primary">
                Старт
            </Button>
            <Button onClick={stopRecord} color="primary">
                Стоп
            </Button>
        </div>

    )
}

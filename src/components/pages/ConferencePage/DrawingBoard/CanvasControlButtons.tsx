import {
    Button, IconButton, makeStyles, TextField
} from '@material-ui/core';
import React, { ChangeEvent, RefObject } from 'react';
import { ReactSketchCanvasProps, ReactSketchCanvasRef } from 'react-sketch-canvas';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import CreateIcon from '@material-ui/icons/Create';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { GithubPicker } from 'react-color';
import { createCanvasHandlers } from './createCanvasHandlers';

interface Props {
    canvasRef: RefObject<ReactSketchCanvasRef>;
    setCanvasProps: React.Dispatch<React.SetStateAction<Partial<ReactSketchCanvasProps>>>;
}

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing(1)
    }
}));

export const CanvasControlButtons = ({ canvasRef, setCanvasProps }: Props) => {
    const classes = useStyles();
    const handlers = createCanvasHandlers(canvasRef);

    return (
        <div className={classes.root}>
            <IconButton onClick={handlers.undoHandler} color="primary">
                <UndoIcon />
            </IconButton>
            <IconButton onClick={handlers.redoHandler} color="primary">
                <RedoIcon />
            </IconButton>
            <Button onClick={handlers.clearHandler} color="primary">
                Очистить
            </Button>
            <IconButton onClick={handlers.penHandler} color="primary">
                <CreateIcon />
            </IconButton>
            <IconButton onClick={handlers.eraserHandler} color="primary">
                <ClearAllIcon />
            </IconButton>
            <GithubPicker onChangeComplete={color => {
                setCanvasProps(
                    (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                        ...prevCanvasProps,
                        strokeColor: color.hex,
                    })
                );
            }}
            />
            <TextField
                type="number"
                label="Ширина ручки"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setCanvasProps(
                        (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                            ...prevCanvasProps,
                            strokeWidth: +event.target.value
                        })
                    );
                }}
                defaultValue={1}
            />
            <TextField
                type="number"
                label="Ширина ластика"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setCanvasProps(
                        (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                            ...prevCanvasProps,
                            eraserWidth: +event.target.value
                        })
                    );
                }}
                defaultValue={15}
            />
        </div>
    );
};

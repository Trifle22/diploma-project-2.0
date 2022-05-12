import { RefObject } from 'react';
import { ReactSketchCanvasRef } from 'react-sketch-canvas';

export const createCanvasHandlers = (canvasRef : RefObject<ReactSketchCanvasRef>) => {
    const undoHandler = () => {
        const undo = canvasRef.current?.undo;

        if (undo) {
            undo();
        }
    };

    const redoHandler = () => {
        const redo = canvasRef.current?.redo;

        if (redo) {
            redo();
        }
    };

    const clearHandler = () => {
        const clearCanvas = canvasRef.current?.clearCanvas;

        if (clearCanvas) {
            clearCanvas();
        }
    };

    const penHandler = () => {
        const eraseMode = canvasRef.current?.eraseMode;

        if (eraseMode) {
            eraseMode(false);
        }
    };

    const eraserHandler = () => {
        const eraseMode = canvasRef.current?.eraseMode;

        if (eraseMode) {
            eraseMode(true);
        }
    };

    return {
        undoHandler,
        redoHandler,
        penHandler,
        eraserHandler,
        clearHandler
    };
};

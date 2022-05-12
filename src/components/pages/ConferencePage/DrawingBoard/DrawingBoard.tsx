import React, { useState } from 'react';
import {
    ReactSketchCanvas, ReactSketchCanvasProps,
    ReactSketchCanvasRef,
} from 'react-sketch-canvas';
import { CanvasControlButtons } from './CanvasControlButtons';

export const DrawingBoard = () => {
    const canvasRef = React.createRef<ReactSketchCanvasRef>();
    const [canvasProps, setCanvasProps] = useState<Partial<ReactSketchCanvasProps>>({
        className: 'react-sketch-canvas',
        width: '100%',
        height: '500px',
        strokeWidth: 1,
        eraserWidth: 15,
        strokeColor: '#000000',
        canvasColor: '#FFFFFF',
        style: { border: '1px solid #CCC' },
    });

    return (
        <>
            <ReactSketchCanvas
                height="60vh"
                ref={canvasRef}
                {...canvasProps}
            />
            <CanvasControlButtons canvasRef={canvasRef} setCanvasProps={setCanvasProps} />
        </>
    );
};

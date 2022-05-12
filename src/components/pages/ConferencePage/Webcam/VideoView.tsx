import React from 'react';
import Webcam from 'react-webcam';

interface Props {
    audioState: boolean;
}

export const VideoView = ({ audioState }: Props) => {
    const videoConstraints = {
        facingMode: 'user'
    };
    return (
        <Webcam
            mirrored
            width="800px"
            height="600px"
            videoConstraints={videoConstraints}
            audio={audioState}
        />
    );
};

import Webcam from 'react-webcam';
import React from 'react';

export const VideoView = () => {
    const videoConstraints = {
        facingMode: 'user'
    };
    return (
        <Webcam
            mirrored
            width="600px"
            height="400px"
            videoConstraints={videoConstraints}
        />
    );
};

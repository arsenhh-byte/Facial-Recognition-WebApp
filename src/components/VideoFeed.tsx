import React, {useEffect, useRef} from 'react';



export function VideoFeed() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className="video-box">
            <video ref={videoRef} autoPlay playsInline />
        </div>
    );
 }
 
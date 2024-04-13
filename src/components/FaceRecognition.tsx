// src/components/FaceRecognition.tsx
import React, { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

const FaceRecognition: React.FC = () => {
 const videoRef = useRef<HTMLVideoElement>(null);

 useEffect(() => {
    const runFaceDetection = async () => {
  	const model = await blazeface.load();
  	const returnTensors = false;
  	if (videoRef.current) {
  	  const predictions = await model.estimateFaces(videoRef.current, returnTensors);
  	  console.log(predictions);
  	}
    };

    if (videoRef.current) {
  	runFaceDetection();
    }
 }, []);

 return <video ref={videoRef} autoPlay playsInline />;
};

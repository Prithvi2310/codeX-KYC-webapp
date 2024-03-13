import React, { useRef, useEffect } from 'react';

function LiveVideoFeed() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const snapButton = document.getElementById('snapButton');

    const handleSnapPhoto = () => {
      if (video && canvas) {
        const ctx = canvas.getContext('2d');
        // Draw the current video frame on the canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert canvas content to image data URL
        const imageDataURL = canvas.toDataURL('image/png');
        // Log or further process the image data URL (e.g., send it to the server)
        console.log('Captured image:', imageDataURL);
      }
    };

    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });

    snapButton.addEventListener('click', handleSnapPhoto);

    return () => {
      snapButton.removeEventListener('click', handleSnapPhoto);
    };
  }, []);

  return (
    <div>
      <h1>Live Video Feed</h1>
      <video ref={videoRef} width="400" height="300" autoPlay></video>
      <br />
      <button id="snapButton">Take Image</button>
      <br />
      <canvas ref={canvasRef} width="400" height="300"></canvas>
    </div>
  );
}

export default LiveVideoFeed;

import React, { useRef, useEffect, useState } from 'react';

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function init() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }

    init();
  }, []);

  function captureImage() {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setImageData(canvas.toDataURL('image/png'));
  }

  return (
    <div>
      <div>
        <video ref={videoRef} width="640" height="480" />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <button onClick={captureImage}>Capture Image</button>
        {imageData && <img src={imageData} alt="Captured Image" />}
      </div>

      <a href="/kyc" className="btn">Next</a>
    </div>
    
  );
}

export default Camera;
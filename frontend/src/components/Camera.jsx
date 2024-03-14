import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [showLiveDisplay, setShowLiveDisplay] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(null);
  const [file, setFile] = useState(null); // State to store the image file

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
    const dataURL = canvas.toDataURL('image/png');
    setImageData(dataURL);
    setShowLiveDisplay(false); // Hide live display after capturing image
    // Convert the data URL to a Blob and create a File object
    const blob = dataURItoBlob(dataURL);
    const imageFile = new File([blob], 'captured_image.png', { type: 'image/png' });
    setFile(imageFile); // Set the captured image file
  }

  function retakeImage() {
    setImageData(null); // Clear captured image data
    setShowLiveDisplay(true); // Show live display again
    setFile(null); // Clear the captured image file
  }

  // Function to handle click on Next button
  async function handleNextButtonClick() {
    setButtonClicked('Next'); // Set the button clicked state to 'Next'
    // Here you can send the file to your backend for AI analysis
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('/kyc', formData);
        console.log('Response from backend:', response.data);
        // Handle response from backend
      } catch (error) {
        console.error('Error sending image for analysis:', error);
        // Handle error
      }
    }
  }

  // Function to convert data URI to Blob
  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
  }

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#242C3F' }}> {/* Change background color here */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Render captured image on top of live display when available */}
        {imageData && (
          <img src={imageData} alt="Captured Image" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100%', maxHeight: '100%' }} />
        )}
        {/* Always render live video display */}
        <video ref={videoRef} width="640" height="480" style={{ display: showLiveDisplay ? 'block' : 'none' }} />
        <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
      </div>
      <div style={{ marginTop: '20px' }}>
        {/* Show "Capture Image" button if live display is visible */}
        {showLiveDisplay && (
          <button onClick={captureImage} className="btn" style={{ marginRight: '10px' }}>Capture Image</button>
        )}
        {/* Show captured image preview below */}
        {imageData && (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>Preview</h3>
            <img src={imageData} alt="Captured Image Preview" style={{ maxWidth: '100%', maxHeight: '200px', display: 'block', margin: '0 auto' }} />
          </div>
        )}
        {/* Show "Retake" button if image is captured */}
        <div style={{ marginTop: '20px' }}>
          {!showLiveDisplay && (
            <button onClick={retakeImage} className="btn" style={{ marginRight: '10px' }}>Retake</button>
          )}
          <Link to="/kyc" className="btn" onClick={handleNextButtonClick}>Next</Link>
        </div>
      </div>
      {/* Conditionally render the "uploaded" message */}
      {buttonClicked === 'Next' && <p style={{ color: 'green' }}>Uploaded</p>}
    </div>
  );
}

export default Camera;

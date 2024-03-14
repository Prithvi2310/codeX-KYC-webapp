import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload } from 'react-feather'; // Import the Upload icon component

function Document(props) {
  const [aadharUploaded, setAadharUploaded] = useState(false);
  const [licenseUploaded, setLicenseUploaded] = useState(false);
  const [panUploaded, setPanUploaded] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'green', marginTop: '20px' }}>
          Upload ID Card
        </h1>
        <h4 style={{ color: 'white', marginTop: '10px' }}>
          Please upload a Government ID for KYC verification
        </h4>
        <div style={{ fontSize: 16, color: 'Gray', marginTop: '10px' }}>
          Your Name and Photo should be clearly visible
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Aadhaar Card</h2>
          <Link to="/capture" style={{ textDecoration: 'none' }}>
            <button className="btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              {aadharUploaded ? 'Uploaded' : 'Capture Pic'} <Upload size={20} style={{ marginLeft: '5px' }} /> {/* Add the Upload icon */}
            </button>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Driving License</h2>
          <Link to="/capture" style={{ textDecoration: 'none' }}>
            <button className="btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              {licenseUploaded ? 'Uploaded' : 'Capture Pic'} <Upload size={20} style={{ marginLeft: '5px' }} /> {/* Add the Upload icon */}
            </button>
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>PAN Card</h2>
          <Link to="/capture" style={{ textDecoration: 'none' }}>
            <button className="btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              {panUploaded ? 'Uploaded' : 'Capture Pic'} <Upload size={20} style={{ marginLeft: '5px' }} /> {/* Add the Upload icon */}
            </button>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Photo</h2>
          <Link to="/capture" style={{ textDecoration: 'none' }}>
            <button className="btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              {photoUploaded ? 'Uploaded' : 'Capture Pic'} <Upload size={20} style={{ marginLeft: '5px' }} /> {/* Add the Upload icon */}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Document;

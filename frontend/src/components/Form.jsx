import React, { useState } from 'react';
import { CloudOff } from 'react-feather';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [address, setAddress] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: '20px' }}>
      <h2 style={{color: 'black'}}>KYC Express</h2>
      <h3>Personal Information</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '10px', alignItems: 'center', width: '100%' }}>
        <label htmlFor="firstName">*First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ width: '30%', fontSize: '14px', backgroundColor: '#BAD6EB', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
        />
        <label htmlFor="lastName">*Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{ width: '30%', fontSize: '14px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
        />
        <label htmlFor="middleName">Middle Name:</label>
        <input
          type="text"
          id="middleName"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          style={{ width: '30%', fontSize: '14px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
        />
        <label htmlFor="dob">Date of Birth (dd/mm/yyyy):</label>
        <input
          type="text"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{ width: '30%', fontSize: '14px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
        />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} style={{ width: '30%', fontSize: '14px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}>
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="employmentStatus">Employment Status:</label>
        <input
          type="text"
          id="employmentStatus"
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
          style={{ width: '30%', fontSize: '14px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
        />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: '30%', height: '100px', fontSize: '14px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }} // Example styling
        ></textarea>
        <label htmlFor="consent">Consent:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label htmlFor="consent" style={{ marginLeft: '5px' }}>Consent</label>
        </div>
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;

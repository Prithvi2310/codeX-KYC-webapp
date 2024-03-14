import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <h2>KYCexpress</h2>
      <h3>Personal Information</h3>
      <div>
        <label htmlFor="firstName">
          *First Name:
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          *Last Name:
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="middleName">
          Middle Name:
          <input
            type="text"
            id="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="dob">
          Date of Birth (dd/mm/yyyy):
          <input
            type="text"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="gender">
          Gender:
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="employmentStatus">
          Employment Status:
          <input
            type="text"
            id="employmentStatus"
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="address">
          Address:
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
        </label>
      </div>
      <div>
        <label htmlFor="consent">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          Consent
        </label>
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
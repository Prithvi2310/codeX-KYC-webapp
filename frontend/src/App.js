// // App.js
// import React, { useState } from 'react';
// import './App.css'; // Import the CSS file

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     aadharNumber: '',
//     email: '',
//     panCard: '',
//     accountNumber: '',
//     photo: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // You can process or submit the form data here
//   };

//   return (
//     <div className="App">
//       <h1>KYC Web App</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Aadhar Card Number:</label>
//           <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="text" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>PAN Card:</label>
//           <input type="text" name="panCard" value={formData.panCard} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Account Number:</label>
//           <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Photo:</label>
//           <input type="file" name="photo" accept="image/*" onChange={handleChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    aadharNumber: '',
    email: '',
    panCard: '',
    accountNumber: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can process or submit the form data here
  };

  return (
    <div className="container"> {/* Add this container */}
      <h1>KYC Web App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Aadhar Card Number:</label>
          <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>PAN Card:</label>
          <input type="text" name="panCard" value={formData.panCard} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Account Number:</label>
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

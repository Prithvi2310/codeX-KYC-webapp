
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; // Import the CSS file

import Form from './components/Form';
import Document from './components/Document';
import Landing from './components/Landing';
import Camera from './components/Camera';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="kyc" element={<Form />} />
        <Route path="document" element={<Document />} />
        <Route path='capture' element={<Camera />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

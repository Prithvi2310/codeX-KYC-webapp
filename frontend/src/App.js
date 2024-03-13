
import React, { useState } from 'react';
import {Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'; // Import the CSS file

import Form from './components/Form';
import Video from './components/Video';
import Document from './components/Document';

function App() {

  return (
    <div className="App">
      <Form />
    </div>
  
  );
}

export default App;

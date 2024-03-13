
import React, { useState } from 'react';
import {Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'; // Import the CSS file

import Form from './components/Form';
import Video from './components/Video';
import Document from './components/Document';
import Landing from './components/Landing';

function App() {

  return (
    <div className="App">
      <Landing />
    </div>
  
  );
}

export default App;

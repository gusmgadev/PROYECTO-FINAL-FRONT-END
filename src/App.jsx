import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Chat, InfoPage, Home } from './pages/index';
import './App.css';
function App() {
  
  return (
  <>
  <div className='mainView'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:id" element={<Chat/>}/>
      <Route path="/InfoPage/:id" element={<InfoPage/>}/>
    </Routes>
  </div>
  </>
  
  );
};

export default App;


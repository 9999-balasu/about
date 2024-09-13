
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Nav from './components/Nav';
const App = () => {
  return (
    <>
    <h1>Natural Farm</h1>

    <p>What ever we want we add and change sir</p>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/about-us" element={<AboutUs/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;


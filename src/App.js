import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Price from './pages/Price';
import Gallery from './pages/Gallery';
import Menu from './conponents/Menu';
import Contact from './pages/Contact';
// import Footer from './conponents/Footer';



import './css/app.css';
function App() {




  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );

}

export default App;

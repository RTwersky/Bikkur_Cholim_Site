import React from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import NavBar from './NavBar';
import Resources from './Resources';
// import Services from './Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" index element={
            <About />
          } />
          {/* <Route path="/services" element={
            <Services />
          } /> */}

          <Route path="/contact" element={
            <Contact />
          } />

          <Route path="/resources" element={
            <Resources />
          } />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

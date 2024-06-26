// Abro un placeholder nuevo, osea utilizo el componente.

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import "./App.css";
import Gallery from "./gallery";
import "./gallery.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// A una nueva pestaña en blanco sin enrutador:

/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1 className="caribbeantitle">Caribbean Gallery</h1>
          </p>
          <a
            className="App-link"
            href="Gallery.js"
            target=""
            rel="noopener noreferrer"
          >
            Visita nuestra galería del Caribe
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;

*/

import logo from './logo.svg';
import React from 'react';

export default function home() {
    return (

<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="caribbeantitle">Caribbean Gallery</h1>
          <a
            className="App-link"
            href={`${window.location.origin}/gallery`}
            rel="noopener noreferrer"
          >
            Visita nuestra galería del Caribe
          </a>
        </header>
      </div>
    );
}
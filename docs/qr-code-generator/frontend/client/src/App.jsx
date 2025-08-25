import React from 'react';
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator';
import QRCodeDisplay from './components/QRCodeDisplay/QRCodeDisplay';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QRCodeGenerator />
      <QRCodeDisplay />
    </div>
  );
};

export default App;
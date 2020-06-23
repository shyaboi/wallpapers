import React from 'react';
import './App.css';
import Donus from '../src/components/thing/index';
import Navbar from '../src/components/Navbar/index';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
     <Donus />
      </header>
    </div>
  );
}

export default App;

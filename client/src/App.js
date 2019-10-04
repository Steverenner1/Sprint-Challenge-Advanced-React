import React from 'react';
import './App.css';
import Playerlist from './Components/Playerlist';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <div className="container">
          <Playerlist />
          </div>
      </header>
    </div>
  );
}

export default App;

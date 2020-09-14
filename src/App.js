import React from 'react';
import mypic from './imgs/2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mypic} className="App-logo" alt="logo" />
        <p>
          권영오애요
        </p>
        <a
          className="App-link"
          href="https://www.twitch.tv/rnjsduddh825"
          target="_blank"
          rel="noopener noreferrer"
        >
          요후요후
        </a>
      </header>
    </div>
  );
}

export default App;

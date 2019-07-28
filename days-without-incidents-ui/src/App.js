import React from 'react';
import partypopper from './party-popper.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={partypopper} className="App-logo" alt="logo" />
        <p class="body-title">Number of days without an incident:</p>
        <p class="body-days">9000!</p>
      </header>
    </div>
  );
}

export default App;

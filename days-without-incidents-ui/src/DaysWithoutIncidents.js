import React from 'react';
import partypopper from './party-popper.svg';

import './App.css';
import './bootstrap.min.css';
import IncidentDetails from './components/IncidentDetails';

function DaysWithoutIncidents() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={partypopper} className="App-logo" alt="logo" />
        <p className="body-title">Last Incident Details:</p>
        <IncidentDetails />
      </header>
    </div>
  );
}

export default DaysWithoutIncidents;

import React from 'react';
import partypopper from './party-popper.svg';

import './App.css';
import './bootstrap.min.css';
import IncidentDetails from './components/IncidentDetails';
import IncidentsDaysAgo from './components/IncidentsDaysAgo';

function DaysWithoutIncidents() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={partypopper} className="App-logo" alt="logo" />
        <IncidentsDaysAgo />
        <IncidentDetails />
      </header>
    </div>
  );
}

export default DaysWithoutIncidents;

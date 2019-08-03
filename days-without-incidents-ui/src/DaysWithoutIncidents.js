import React, { useState, useEffect } from 'react';
import partypopper from './party-popper.svg';

import './App.css';
import './bootstrap.min.css';
import IncidentDetails from './components/IncidentDetails';
import IncidentsDaysAgo from './components/IncidentsDaysAgo';

const DaysWithoutIncidents = () => {
  const [apiDataJson, setApiDataJson] = useState(null);

  useEffect(() => {
      fetch("/api/incidents/latest")
          .then(res => res.json())
          .then(data => setApiDataJson(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={partypopper} className="App-logo" alt="logo" />
        {apiDataJson ? (
          <>
            <IncidentsDaysAgo apiDataJson={apiDataJson} />
            <IncidentDetails apiDataJson={apiDataJson} />
          </>
        ) : (
          <>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </>
        )
        }
      </header>
    </div>
  );
}

export default DaysWithoutIncidents;

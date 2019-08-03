import React, { useState, useEffect } from 'react';
import partypopper from './party-popper.svg';

import './App.css';
import './bootstrap.min.css';
import IncidentDetails from './components/IncidentDetails';
import IncidentsDaysAgo from './components/IncidentsDaysAgo';

const DaysWithoutIncidents = () => {
  const [apiDataJson, setApiDataJson] = useState(null);

  useEffect(() => {
    const getIncidentData = () => {
      fetch("/api/incidents/latest")
        .then(res => {
          if (!res.ok) {
            throw Error();
          }
          return res.json();
        })
        .then(data => setApiDataJson(data))
        .catch(() => setApiDataJson(null))
    };
    getIncidentData();
    const interval = setInterval(getIncidentData, 5000);

    return () => clearInterval(interval)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {apiDataJson ? (
          <>
            <img src={partypopper} className="App-logo" alt="logo" />
            <IncidentsDaysAgo apiDataJson={apiDataJson} />
            <IncidentDetails apiDataJson={apiDataJson} />
          </>
        ) : (
          <>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default DaysWithoutIncidents;

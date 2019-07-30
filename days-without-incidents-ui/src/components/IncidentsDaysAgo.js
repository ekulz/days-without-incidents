import React, { useState, useEffect } from 'react';

import axios from 'axios';

function IncidentsDaysAgo() {
    const [apiDataJson, setApiDataJson] = useState(null);

    useEffect(() => {
        axios
            .get("https://localhost:5001/api/incidents/latest")
            .then(({ data }) => {
                setApiDataJson(data)
            });
    }, []);

    return apiDataJson ? (
        <div className="incidents-days-ago">
            <p className="body-title">Days without incidents: {apiDataJson.daysAgo}</p>
        </div>
    ) : (
        <div className="incidents-days-ago">
            <p className="body-title">Loading...</p>
        </div>
    );
}

export default IncidentsDaysAgo;
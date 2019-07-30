import React, { useState, useEffect } from 'react';

import axios from 'axios';

function IncidentDetails() {
    const [apiDataJson, setApiDataJson] = useState(null)

    useEffect(() => {
        axios
            .get("https://localhost:5001/api/incidents/latest")
            .then(({ data }) => {
                setApiDataJson(data)
            });
    }, [])

    return apiDataJson ? (
        <div className="incident-details">
            <p className="body-text">Name: {apiDataJson.title}</p>
            <p className="body-text">Date: {apiDataJson.date}</p>
            <p className="body-text">Days Ago: {apiDataJson.daysAgo}</p>
        </div>
    ) : (
        <p className="body-text">Loading...</p>
    );
}

export default IncidentDetails;
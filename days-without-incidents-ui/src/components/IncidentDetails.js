import React, { useState, useEffect } from 'react';

import axios from 'axios';

function IncidentDetails() {
    const [apiDataJson, setApiDataJson] = useState(null);

    useEffect(() => {
        axios
            .get("https://localhost:5001/api/incidents/latest")
            .then(({ data }) => {
                setApiDataJson(data)
            });
    }, []);

    return apiDataJson ? (
        <div className="incident-details">
            <p className="body-subtitle">Last Incident Details:</p>
            <p className="body-text">Incident title: {apiDataJson.title}</p>
            <p className="body-text">Incident date: {GetFormattedDate(apiDataJson.date)}</p>
        </div>
    ) : (
        <p className="body-subtitle">Loading...</p>
    );
}

function GetFormattedDate(date) {
    var dateTime = new Date(date);
    return dateTime.getDate() + "/" 
        + (dateTime.getMonth() + 1) + "/"
        + dateTime.getFullYear() + " @ "
        + (dateTime.getHours() < 10 ? "0":"") + dateTime.getHours() + ":" 
        + (dateTime.getMinutes() < 10 ? "0":"") + dateTime.getMinutes() + ":"
        + (dateTime.getSeconds() < 10 ? "0":"") + dateTime.getSeconds();
}

export default IncidentDetails;
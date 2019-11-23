import React from 'react';

const IncidentDetails = React.memo(({ apiDataJson }) => {
    const subtitle = (apiDataJson.status === "resolved")
        ? "Last Incident Details:"
        : "Current Incident Details:"
        
    return (
        <div className="incident-details">
            <p className="body-subtitle">{subtitle}</p>
            <p className="body-text">Incident title: {apiDataJson.title}</p>
            <p className="body-text">Incident date: {GetFormattedDate(apiDataJson.date)}</p>
        </div>
    )
});

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
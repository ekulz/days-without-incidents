import React from 'react';

const IncidentsDaysAgo= React.memo(({ apiDataJson }) => {
    let text = `Days without PagerDuty incidents: ${apiDataJson.daysAgo}`
    if (apiDataJson.status !== "resolved") text = "Production incident in progress...";

    return (
        <div className="incidents-days-ago">
            <p className="body-title">{text}</p>
        </div>
    );
});

export default IncidentsDaysAgo;
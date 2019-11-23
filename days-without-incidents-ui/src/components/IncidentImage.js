import React from 'react';
import partypopper from '../images/party-popper.svg';
import upsidedownface from '../images/upside-down-face.svg';

const IncidentImage = React.memo(({ apiDataJson }) => {
    const image = apiDataJson.daysAgo === 0 ? upsidedownface : partypopper;
    return (
        <div className="incident-image">
            <img src={image} className="App-logo-spin" alt="logo" />
        </div>
    )
});

export default IncidentImage;
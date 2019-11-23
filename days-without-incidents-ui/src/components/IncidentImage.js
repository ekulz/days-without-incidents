import React from 'react';
import partyPopper from '../images/party-popper.svg';
import upsideDownFace from '../images/upside-down-face.svg';
import thisIsFine from '../images/this-is-fine.png';

const IncidentImage = React.memo(({ apiDataJson }) => {
    const incidentIsResolved = apiDataJson.status === "resolved"
    const imageClassName = incidentIsResolved ? "App-logo-spin" : "App-logo-spin-circular";
    let image = thisIsFine;

    if (incidentIsResolved) {
        image = apiDataJson.daysAgo > 0 
            ? partyPopper
            : upsideDownFace;
    }

    return (
        <div className="incident-image">
            <img src={image} className={imageClassName} alt="logo" />
        </div>
    )
});

export default IncidentImage;
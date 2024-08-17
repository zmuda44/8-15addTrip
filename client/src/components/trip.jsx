import React from 'react';

const Trip = ({ location, date }) => {
    return (
        <div className="trip-card">
            <h2>{location}</h2>
            <p>{date}</p>
        </div>
    );
};

export default Trip;
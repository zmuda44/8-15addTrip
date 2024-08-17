import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './trips.css';

const DreamTrips = () => {
    return (
        <div className="dream-trips">
            <Header />
            <div className="friends-box">
                <h2>Friends</h2>
                {/* Display friends here */}
            </div>
            <div className="dream-trips-container">
                <div className="dream-trip-box">
                    {/* Display dream trip 1 here */}
                </div>
                <div className="dream-trip-box">
                    {/* Display dream trip 2 here */}
                </div>
                <div className="dream-trip-box">
                    {/* Display dream trip 3 here */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DreamTrips;


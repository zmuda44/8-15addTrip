import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddTrip from '../../components/AddTrip/addTripDate';
import UpcomingTrips from '../../components/Trips/upcomingTrips';
import PreviousTrips from '../../components/Trips/previousTrips';
// import DreamTrips from '../../components/Trips/DreamTrips';
// import './profile.css';
// import northern_lights from '../../assets/northern_lights.png';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_TRIPS } from '../../utils/queries';
// import { GET_PREV_TRIPS } from '../../utils/queries';
// import { GET_UPCOMING_TRIPS } from '../../utils/queries';
// import { GET_DREAM_TRIPS } from '../../utils/queries';

import Auth from '../../utils/auth';




const Profile = () => {
    const { loading, data  } = useQuery(GET_USER_TRIPS);
    const user = data?.me || {};
    const userTrips = user.trips || [];
    const upcomingTrips = []
    const prevTrips = []

    for (const trip of userTrips) {
        const startTripDate = new Date(trip.startTripDate).getTime();       

        if (startTripDate > Date.now()) {
            upcomingTrips.push(trip);
        }
        if (startTripDate < Date.now()) {
            prevTrips.push(trip);
        }
    }

    console.log(upcomingTrips)

    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div>
                <Header />
            </div>
            <main>
                {/* <img src={northern_lights} alt="Northern lights" className="profileBg"></img> */}
                {/* Main content */}
                <div id="main-content">
                    <h1>Welcome {user.username}</h1>

                    <AddTrip />

                    {/* Upcoming trips box */}
                    <div id="upcoming-trips-box">
                        <Link to="/upcomingtrips">Upcoming Trips</Link>
                        <UpcomingTrips
                        trips = {upcomingTrips} />
                    </div>

                    {/* Previous trips box */}
                    <div id="previous-trips-box">
                        <Link to="/previoustrips">Previous Trips</Link>
                        <PreviousTrips
                        trips = {prevTrips} />
                    </div>

                    {/* Dream trips box */}
                    <div id="dream-trips-box">
                        <Link to="/dreamtrips">Dream Trips</Link>
                        {/* Add your dream trips list here */}
                    </div>

                    {/* <div id="t-box">
                        <h2>Total Trips</h2>
                        {user.trips?.length > 0 ? (
                            user.trips.map((trip) => (
                                <div key={trip._id}>
                                <p>{trip.startTripDate}</p>
                                <p>{trip.endTripDate}</p>
                                <h3>{trip.location}</h3>
                                <p>{trip.journalEntry}</p>
                                </div>
                            ))
                        ) : (
                            <p>No trips available</p>
                        )}
                    </div> */}

                </div>

                {/* User icon box */}
                <div id="user-icon-box">
                    {/* Add your user icon here */}
                </div>
            </main>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Profile;
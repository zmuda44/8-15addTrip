import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './trips.css';
// import { GET_TRIP } from '../../graphql/queries';
import Trip from '../../components/trip';

const IndividualTrip = ({ username }) => {

    const { loading, error, data } = useQuery(GET_TRIP, {
        variables: {
            tripId: 'PLACEHOLDER_TRIP_ID' // Replace with the actual trip ID
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const trip = data.trip;

    return (
        <div>
            <Header />
            <Trip trip={trip} />
            <Footer />
        </div>
    );
};

export default IndividualTrip;

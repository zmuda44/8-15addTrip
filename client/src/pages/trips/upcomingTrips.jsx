import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './trips.css';

const UpcomingTrips = () => {

    const { loading, error, data } = useQuery(GET_USER_TRIPS);

                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;

                const currentDate = new Date();
                const previousTrips = data.userTrips.filter(trip => new Date(trip.date) > currentDate);


    return (
        <div>
            <Header />
            {previousTrips.map(trip => (
                            <Trip key={trip.id} trip={trip} />
                        ))}
            <Footer />
        </div>
    );
};

export default UpcomingTrips;

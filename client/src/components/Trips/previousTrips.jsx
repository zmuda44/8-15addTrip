

function PreviousTrips ({ trips }) {
    return (
        <div id="trips-box">  
            {
                trips.map((trip) => {
                    // Convert trip dates to a readable format
                    const formattedStartDate = new Date(trip.startTripDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long', // e.g., January
                        day: 'numeric'  // e.g., 1
                    });
                    const formattedEndDate = new Date(trip.endTripDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    return (
                        <div key={trip._id}>
                            <p>Start Date: {formattedStartDate}</p>
                            <p>End Date: {formattedEndDate}</p>
                            <h3>{trip.location}</h3>
                            <p>{trip.journalEntry}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}



export default PreviousTrips;


  
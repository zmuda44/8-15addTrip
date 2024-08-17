

function DreamTrips ({ trips }) {
  trips.map((trip) => {console.log(trip.startTripDate)})
  
      return (
          <div id="trips-box">
              <h2>This will be upcoming trips</h2>
              {
                  trips.map((trip) => (
                      <div key={trip._id}>
                          <p>{trip.startTripDate}</p>
                          <p>{trip.endTripDate}</p>
                          <h3>{trip.location}</h3>
                          <p>{trip.journalEntry}</p>
                      </div>
                  ))
         }
          </div>
      );
  }
  
  export default UpcomingTrips;
  
  
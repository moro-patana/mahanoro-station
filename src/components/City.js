import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
export default function City({trips, getTripsList}) {
    const { destinationName } = useParams();
    console.log(trips);
    useEffect(() => {
        getTripsList()
      }, [])
      
      function createTripTemplate(trip) {
		return (
			<Link to={`/destination/${trip.id}`} key={trip.id}>
				<div>
					<h4>{new Date(trip.departureTime).toString()}</h4>
                    <button>Book a seat</button>
				</div>
			</Link>
		);
        }
        function showTripsFilteredByDestination() {
            const filteredTrips = trips
                .filter((trip) => trip.destination === destinationName)
                .map(createTripTemplate);
            if (filteredTrips.length === 0) {
                return <p>No results.</p>;
            }
            return filteredTrips;
        }
    return (
        <>
        <h2>Next Trip to:</h2>
            <div>{showTripsFilteredByDestination()}</div>
        </>
    )
}
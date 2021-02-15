import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export default function City({trips, getTripsList}) {
    const { cityName } = useParams();
    console.log(trips);
    useEffect(() => {
        getTripsList()
      }, [])
      
      function createTripTemplate(trip) {
        var options = { weekday: 'long'};
		return (
			<Link to={`/destination/${trip.id}`} key={trip.id}>
                <Container>
                <i className="ri-bus-2-fill"></i>
                <div>
                    <h4>{new Intl.DateTimeFormat('en-US', options).format(trip.departureTime)}</h4>
                    <p>{new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()}</p>
                </div>
                    <div>
                        <p>{new Date(trip.departureTime).toLocaleDateString()}</p>
                        <span>{trip.seats.filter(seat => seat.isAvailable === true).length} seats left</span>
                    </div>
                    <Link to={`/trip/${trip.id}`}><button>Book a seat</button></Link>
			   </Container>
            </Link>
		);
        }
        function showTripsFilteredByDestination() {
            const filteredTrips = trips
                .filter((trip) => trip.destination === cityName)
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

import React from 'react'
import { Link, useParams} from 'react-router-dom';

export default function Seat({trips}) {
    console.log(trips);
    const { seatId } = useParams();
    const trip = trips.find((trip) => trip.id == seatId);
	console.log(trip);

    function selectSeat(trip) {
        <Link to={`/seat/${trip.id}`}>
            <di>
                <span>{trip.driverName}</span>
            </di>
        </Link>
    }
    function showTripsInfo() {
        const filteredTrips = trips
            .filter((trip) => trip.id == seatId)
            .map(selectSeat);
        if (filteredTrips.length === 0) {
            return <p>No results.</p>;
        }
        return filteredTrips;
    }
    return (
        <div>
            <p>hey</p>
            <div>{showTripsInfo()}</div>
        </div>
    )
}

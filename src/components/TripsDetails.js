import React from 'react'
import {useSelector} from "react-redux"

export default function TripsDetails() {
    const trips = useSelector(state => state.trips)
    return (
        <div>
            <h2>Book a seat to:</h2>
            {trips.map(trip => (
                <div>
                    <ul>
                        {trip.seats.map(seat => (
                            <li>💺<span>{seat.id}</span></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

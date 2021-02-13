import React from 'react'
import { useSelector } from "react-redux"

export default function Destination() {
    const trips = useSelector(state => state.trips)
    return (
        <>
            {trips.map(trip => (
                <div>
                    <h2>Next Trip to:</h2>
                    <p>{trip.Destination}</p>
                </div>
            ))}
        </>
    )
}

import React from 'react'
import { useSelector } from "react-redux"

export default function DestinationsList({trips}) {
    const destinations = useSelector(state => state.destinations)
    return (
        <div>
            <h2>🚍Where are you going?</h2>
            {destinations.map((destination) => (
                <div>
                    <span>🏙{destination}</span>
                </div>
            ))}
        </div>
    )
}

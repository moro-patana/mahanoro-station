import React from 'react'

export default function DestinationsList({trips, destinations}) {
    return (
        <div>
            <h2>🚍Where are you going?</h2>
            {destinations.map((destination) => (
                <div>
                    <span>{destination}</span>
                </div>
            ))}
        </div>
    )
}

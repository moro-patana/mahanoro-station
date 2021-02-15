import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

export default function CitiesList() {
    const destinations = useSelector(state => state.destinations)
    return (
        <div>
            <h2>🚍Where are you going?</h2>
            {destinations.map((destination) => (
                <Link to={`/city/${destination}`}>
                    <span>🏙{destination}</span>
                </Link>
            ))}
        </div>
    )
}

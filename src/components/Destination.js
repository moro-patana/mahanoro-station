import React, {useEffect} from 'react'
import { useSelector } from "react-redux"
import { getTripsList } from "../actions/index"

export default function Destination() {
    const trips = useSelector(state => state.trips)
    console.log(trips);
    useEffect(() => {
        getTripsList()
      }, [])
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

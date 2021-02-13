import React, {useEffect} from 'react'
export default function Destination({trips, getTripsList}) {
    console.log(trips);
    useEffect(() => {
        getTripsList()
      }, [])
      
    return (
        <>
        <h2>Next Trip to:</h2>
            {trips.map(trip => (
                <div>
                    <p>{trip.destination}</p>
                </div>
            ))}
        </>
    )
}

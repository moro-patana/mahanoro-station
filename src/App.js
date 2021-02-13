import React from 'react'
import DestinationsList from "./components/DestinationsList"
import Destination from "./containers/Destination"

export default function App() {
    return (
        <div>
            <h1>Hello</h1>
            <DestinationsList/>
            <Destination/>
        </div>
    )
}

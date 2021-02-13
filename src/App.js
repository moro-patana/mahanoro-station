import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import DestinationsList from "./components/DestinationsList"
import Destination from "./containers/Destination"
import HeaderMenu from "./components/HeaderMenu"

export default function App() {
    return (
        <div>
            <h1>Hello</h1>
            <HeaderMenu/>
            <Switch>
                <Route exact path="/"><DestinationsList/></Route>
            </Switch>
            {/* <Destination/> */}
        </div>
    )
}

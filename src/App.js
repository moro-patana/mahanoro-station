import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import DestinationsList from "./components/DestinationsList"
import Destination from "./containers/Destination"
import HeaderMenu from "./components/HeaderMenu"
import MyAccount from './components/MyAccount';
import TripsDetails from './components/TripsDetails';

export default function App() {
    return (
        <div>
            <h1>Hello</h1>
            <HeaderMenu/>
            {/* <TripsDetails/> */}
            <Switch>
                <Route exact path="/destination"><DestinationsList/></Route>
                <Route path="/destination/:destinationName"><Destination/></Route>
                <Route path="/account"><MyAccount/></Route>
            </Switch>
        </div>
    )
}

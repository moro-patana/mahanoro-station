import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import DestinationsList from "./components/DestinationsList"
import Destination from "./containers/Destination"
import HeaderMenu from "./components/HeaderMenu"
import MyAccount from './components/MyAccount';
import Seat from './components/Seat';

export default function App() {
    return (
        <div>
            <h1>Hello</h1>
            <HeaderMenu/>
            <Seat/>
            <Switch>
                <Route exact path="/destination"><DestinationsList/></Route>
                <Route path="/destination/:destinationName"><Destination/></Route>
                {/* <Route path="/seat/:seatId"><Seat/></Route> */}
                <Route path="/account"><MyAccount/></Route>
            </Switch>
            {/* <Destination/> */}
        </div>
    )
}

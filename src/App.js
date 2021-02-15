import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import CitiesList from "./components/CitiesList"
import City from "./containers/City"
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
                <Route exact path="/"><CitiesList/></Route>
                <Route path="/city/:cityName"><City/></Route>
                <Route path="/account"><MyAccount/></Route>
            </Switch>
        </div>
    )
}

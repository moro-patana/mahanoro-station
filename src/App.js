import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import CitiesList from "./components/CitiesList"
import City from "./containers/City"
import HeaderMenu from "./components/HeaderMenu"
import MyAccount from './components/MyAccount';
import TripsDetails from './containers/TripsDetails';
import Modal from "./containers/Modal"

export default function App() {
    return (
        <div>
            <HeaderMenu/>
            <Modal/>
            {/* <TripsDetails/> */}
            <Switch>
                <Route exact path="/"><CitiesList/></Route>
                <Route path="/city/:cityName"><City/></Route>
                <Route path="/account"><MyAccount/></Route>
                <Route exact path="/trip/:tripId">
					<TripsDetails />
				</Route>
            </Switch>
        </div>
    )
}

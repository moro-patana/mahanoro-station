import React from 'react'
import { Switch, Route } from "react-router-dom"
import Menu from "./components/Menu"
import CitiesList from "./components/CitiesList"
import City from "./containers/City"
import Trip from "./containers/Trip"
import Modal from "./containers/Modal"
import Account from './components/Account'

export default function App() {
    return (
        <div>
            <Menu/>
            <Modal/>
            <Switch>
                <Route exact path="/">
                    <CitiesList/>
                </Route>
                <Route  path="/account">
                    <Account/>
                </Route>
                <Route path="/city/:cityName">
                    <City/>
                </Route>
                <Route path="/trip/:tripId">
                    <Trip/>
                </Route>
            </Switch>
        </div>
    )
}

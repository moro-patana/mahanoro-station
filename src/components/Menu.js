import React from 'react'
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div>
            <Link to="/">🚍 Mahanoro Station</Link>
            <Link to="/account">My Account</Link>
        </div>
    )
}

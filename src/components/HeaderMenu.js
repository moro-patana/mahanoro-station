import React from 'react'
import { Link } from "react-router-dom"

export default function HeaderMenu() {
    return (
        <div>
            <Link to="/destination">🚍 Mahanoro Satation</Link>
            <Link to="/account">My Account</Link>
        </div>
    )
}

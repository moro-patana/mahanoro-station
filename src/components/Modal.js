import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import ModalPage from "react-modal"

export default function Modal({toggleModal, displayModal}) {
    const trips = useSelector(state => state.trips)
    return (
        <ModalPage
        isOpen={displayModal}
        >
            <button onClick={()=>{if(toggleModal) {toggleModal(false) }}}>close</button>
            <h4>Booking confirmed</h4>
            <p>
            Thank you for trusting our services. 
            Your booking has been added to your account. You can review it there.
            </p>
            <Link to={`/account`}>
            <button onClick={()=>{if(toggleModal) {toggleModal(false) }}}>Check your account</button>
            </Link>
        </ModalPage>
    )
}

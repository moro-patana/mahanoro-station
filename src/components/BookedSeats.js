import React from 'react'
import { connect } from "react-redux"
import { removeCartItem } from "../actions/index"

function BookedSeats({bookedSeats, removeCartItem}) {
    return (
        <div>
                {bookedSeats.map(seat => (
                    <div>
                        <i className="ri-bus-2-fill"></i>
                        <div>
                            <p>{seat.destination}</p>
                            <p>{seat.departureTime}</p>
                        </div>
                        <div>
                            <p></p>
                            <p>{seat.price}</p>
                        </div>
                        <button>Cancel</button>
                    </div>
                ))}
                <p>Hello</p>
        </div>
    )
}
export default connect((state) => ({ bookedSeats: state.bookedSeats }), {
	removeCartItem,
})(BookedSeats);


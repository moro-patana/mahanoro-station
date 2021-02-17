import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import busSeat from "../img/emojione_seat.svg"

import { addReservation, removeTrip} from '../actions/index';


export default function SelectedTrip({ seat}) {
	const selectedSeats = useSelector((state) => state.selectedSeats);
	const dispatch = useDispatch();

	function showBookingIcon() {
		const isAlreadyInCart = selectedSeats.some((item) => item.id === seat.id);
		if (isAlreadyInCart) {
			return (
				<button 
                onClick={() => dispatch(removeTrip(seat))}></button>
			);
		}
		return (
        <button 
                onClick={() => dispatch(addReservation(seat))}
                value={seat.id} 
				className={seat.isAvailable === true ? "available-seat" : "booked-seat"}
		>
         <img src={busSeat} alt="seat"/>
		</button>
        )
	}

	return (
		  <div>
                {showBookingIcon()}
			</div>
    )
}

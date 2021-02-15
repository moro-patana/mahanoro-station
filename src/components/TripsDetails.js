import React from 'react';
import { Link } from "react-router-dom"
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TripsDetails({toggleModal}) {
	const { tripId } = useParams();

	const trips = useSelector((state) => state.trips);
	
	console.log(trips);
	const history = useHistory();

	const trip = trips.find((trip) => trip.id == tripId);
	console.log(trip);

	return (
		<div>
			<h1>
				Next trip to:
				{trip?.destination}
			</h1>
			<div>
			<h3>Pick a seat</h3>
				{trip?.seats.map(seat => (
                  <div>
						<button value={seat.id} className={seat.isAvailable === true ? "available-seat" : "booked-seat"}>{seat.id}</button>
				  </div>
				))}
				<div>
					<h3>Trip Informations:</h3>
					<div>
						<p>
							<span>Departure Time: {trip?.departureTime}</span>
						</p>
						<p>
							<span>Driver: {trip?.driverName}</span>
						</p>
						<p>
							<span>Driver's contact: {trip?.driverContact}</span>
						</p>
						<p>
							<span>Estimated duration: {trip?.estimatedDuration}</span>
						</p>
						<p>
							<span>Breaks: {trip?.breaks}</span>
						</p>
						<p>Fare: {trip?.price} Ar/seat</p>
						<button
						onClick={()=>{
							if(toggleModal){
							  toggleModal(true);
							}
						  }
						}
						>
							Book<small></small>seat
						</button>
						<p>Total: Ar</p>
					</div>
				</div>
            </div>
            </div>
	);
}


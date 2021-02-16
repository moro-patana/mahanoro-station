import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components"
import Seat from "../img/seat.png"

const Container = styled.div`
   display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Header = styled.h2`
    margin: 0;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
`;
const CityName = styled.span`
   color: #E53170;
   font-size: 24px;
`;
const Button = styled.button`
   border: none;
   margin-bottom: 20px;
   padding: 10px;
   cursor: pointer;
`;
const Seats = styled.div`
   display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
	.booked-seat {
	   background-color: red;
   }
`;
const Image = styled.img`
   width: 60px;
`;
export default function TripsDetails({toggleModal}) {
	const { tripId } = useParams();

	const trips = useSelector((state) => state.trips);

	const trip = trips.find((trip) => trip.id == tripId);
	console.log(trip);

	return (
		<div>
			<Header>
				Book a seat to:
				<CityName>{trip?.destination}</CityName>
			</Header>
			<Container>
				<div>
				<h3>Pick a seat</h3>
					<Seats>
						{trip?.seats.map(seat => (
						  <div>
								<Button 
								value={seat.id} 
								className={seat.isAvailable === true ? "available-seat" : "booked-seat"}
								>
								<Image src={Seat}/></Button>
						  </div>
						))}
					</Seats>
					</div>
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
			</Container>
            </div>
	);
}


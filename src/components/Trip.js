import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components"
import SelectedTrip from './SelectedTrip';

const TripCard = styled.div`
  padding: 1rem;
`;
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
   margin-bottom: 20px;
   cursor: pointer;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 18px;
    background-color: #E53170;
    border: none;
    color: white;
`;
const Seats = styled.div`
   display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
	row-gap: 10px;
	.booked-seat {
	   background-color: red;
   }
`;
const SeatNumber = styled.small`
 color: orange;
 font-size: 20px;
`;
export default function Trip({toggleModal}) {
	const selectedSeats = useSelector(state => state.selectedSeats);
	console.log(selectedSeats);
	const { tripId } = useParams();

	const trips = useSelector((state) => state.trips);

	const trip = trips.find((trip) => trip.id == tripId);
	console.log(trip);

	function showSeatsList() {
		if (!trip) return;
		const seatsList = trip.seats
			.map((seat) => <SelectedTrip key={seat.id} seat={seat}></SelectedTrip>);
		return seatsList;
	}
	return (
		<TripCard>
			<Header>
				Book a seat to:
				<CityName>{trip?.destination}</CityName>
			</Header>
			<Container>
				<div>
				<h3>Pick a seat</h3>
					<Seats>
						{showSeatsList()}
					</Seats>
					</div>
					<div>
						<h3>Trip Informations:</h3>
						<div>
							<p>
								<span>Departure Time: <b>{trip?.departureTime}</b></span>
							</p>
							<p>
								<span>Driver: <b>{trip?.driverName}</b></span>
							</p>
							<p>
								<span>Driver's contact: <b>{trip?.driverContact}</b></span>
							</p>
							<p>
								<span>Estimated duration: <b>{trip?.estimatedDuration}</b></span>
							</p>
							<p>
								<span>Breaks: <b>{trip?.breaks}</b></span>
							</p>
							<p>Fare: <b>{trip?.price}</b> Ar/seat</p>
							<Button
							onClick={()=>{
								if(toggleModal){
								  toggleModal(true);
								}
							  }
							}
							>Book <SeatNumber>{selectedSeats.length}</SeatNumber> seat
							</Button>
							<p>Total: {selectedSeats.length * trip?.price} Ar</p>
						</div>
					</div>
			</Container>
            </TripCard>
	);
}


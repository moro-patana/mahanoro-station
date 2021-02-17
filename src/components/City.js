import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components"

const CityCard = styled.div`
    padding: 1rem;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 18px;
    background-color: #E53170;
    border: none;
    color: white;
`;
export default function City({trips, getTripsList}) {
    const { cityName } = useParams();
   
    useEffect(() => {
        getTripsList()
      }, [])

      function createTripTemplate(trip) {
        var options = { weekday: 'long'};
		return (
			<Link to={`/city/${trip.destination}`} key={trip.id}>
                <Container>
                <i className="ri-bus-2-fill"></i>
                <div>
                    <h4>{new Intl.DateTimeFormat('en-US', options).format(trip.departureTime)}</h4>
                    <p>{new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()}</p>
                </div>
                    <div>
                        <p>{new Date(trip.departureTime).toLocaleDateString()}</p>
                        <span>{trip.seats.filter(seat => seat.isAvailable === true).length} seats left</span>
                    </div>
                    <Link to={`/trip/${trip.id}`}><Button>Book a seat</Button></Link>
			   </Container>
            </Link>
		);
        }
        function showTripsFilteredByDestination() {
            const filteredTrips = trips
                .filter((trip) => trip.destination === cityName)
                .map(createTripTemplate);
            if (filteredTrips.length === 0) {
                return <p>No results.</p>;
            }
            return filteredTrips;
        }
    return (
        <CityCard>
            <Header>
                <span>Next Trip to:</span> 
                <CityName>{cityName}</CityName>
            </Header>
            <div>{showTripsFilteredByDestination()}</div>
        </CityCard>
    )
}

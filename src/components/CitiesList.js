import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import styled from "styled-components"


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
`;
const CityName = styled.p`
    margin-bottom: 20px;
    padding: 20px;
    background-color: black;
    color: white;

    span {
        text-transform: uppercase;
        font-size: 32px;
    }
`;

export default function CitiesList() {
    const destinations = useSelector(state => state.destinations)
    return (
        <div>
            <h2>🚍Where are you going?</h2>
            {destinations.map((destination) => (
                <Link to={`/city/${destination}`}>
                       <CityName>
                           <i class="ri-community-line"></i>
                           <Container>
                               <ul><li>{destination}</li></ul>
                            </Container>
                       </CityName>
                </Link>
            ))}
        </div>
    )
}

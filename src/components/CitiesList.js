import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import styled from "styled-components"


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    
`;
const Title = styled.h2`
    text-align: center;
    margin: 0;
    padding: 100px;
    font-size: 40px;
`;
const CityName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background-color: black;
    color: white;

    span {
        text-transform: uppercase;
        font-size: 25px;
    }
`;
const List = styled.li`
   text-transform: uppercase;
    font-size: 32px;
`;

export default function CitiesList() {
    const cities = useSelector(state => state.cities)
    return (
        <div>
            <Title>🚍Where are you going?</Title>
            <Container>
            {cities.map((city) => (
                <Link to={`/city/${city}`} key={city}>
                       <CityName>
                           <i className="ri-community-line"></i>
                           <ul><List>{city}</List></ul>
                       </CityName>
                </Link>
            ))}
            </Container>
        </div>
    )
}

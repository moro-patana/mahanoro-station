import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Title = styled.h1`
   font-size: 32px;
   color: black;

`;
export default function HeaderMenu() {
    return (
        <Container>
            <Link to="/">
                <Header>
                    <i className="ri-bus-2-fill"></i>
                    <Title>Mahanoro Station</Title>
                </Header>
            </Link>
            <Link to="/account">My Account</Link>
        </Container>
    )
}

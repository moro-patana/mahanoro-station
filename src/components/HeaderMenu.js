import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 background-color: black;
 padding: 20px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Title = styled.h1`
   font-size: 32px;
   color: white;
`;
const Account = styled.div`
    font-size: 24px;
    line-height: 28px;
    color: #A7A9BE;
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
            <Link to="/account">
                <Account>My Account</Account>
            </Link>
        </Container>
    )
}

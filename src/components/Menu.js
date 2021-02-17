import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import headerLogo from "../img/header-logo.svg"

const HeaderContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    a {
        font-size: 24px;
        color: white;
    }
`;
const Logo = styled.div`
    display: flex;
    flex-direction: row;
`;
const Title = styled.h1`
  font-size: 24px;
  padding: 10px;
`;
export default function Menu() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo><img src={headerLogo} alt="logo"/><Title>Mahanoro Station</Title></Logo>
            </Link>
            <Link to="/account">My Account</Link>
        </HeaderContainer>
    )
}

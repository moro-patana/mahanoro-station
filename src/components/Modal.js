import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import ModalPage from "react-modal";
import checkIcon from "../img/check.svg"
import closeIcon from "../img/close-icon.svg"
import styled from "styled-components"

const ModalCard = styled.div`
 text-align: center;
`;
const Title = styled.h4`
    margin: 0;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 18px;
    border: none;
    background-color: transparent;
`;
const Span = styled.span`
 padding: 20px;
 font-size: 24px;
`;
const Text = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-align: center;
`;
export default function Modal({toggleModal, displayModal}) {
    const trips = useSelector(state => state.trips)
    return (
        <ModalPage
        isOpen={displayModal}
        >
            <ModalCard>
            
                <CloseButton onClick={()=>{if(toggleModal) {toggleModal(false) }}}><img src={closeIcon} alt="close button icon"/></CloseButton>
                <Title>
                    <img src={checkIcon} alt="check icon"/>
                    <Span>Booking confirmed</Span>
                </Title>
                <Text>
                Thank you for trusting our services.
                Your booking has been added to your account. You can review it there.
                </Text>
                <Link to={`/account`}>
                <Button onClick={()=>{if(toggleModal) {toggleModal(false) }}}>Check your account</Button>
                </Link>
        </ModalCard>
        </ModalPage>
    )
}

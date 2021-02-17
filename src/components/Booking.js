import React, { useState, useEffect } from 'react';
import { connect, dispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { AiOutlineDelete } from 'react-icons/ai';
import styled from 'styled-components';

import { removeTrip } from '../actions/index';

const CartItemsContainer = styled.div`
	display: grid;
	gap: 20px;
`;

const CartItemStyles = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	.price {
		color: black;
	}
	svg {
		color: #bae8e8;
		cursor: pointer;
	}
	svg:hover {
		color: #ffd803;
	}
`;

function Booking({ selectedSeats, removeTrip, seat}) {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newTotal = selectedSeats.reduce((total, seat) => {
			total += seat.price;
			return total;
		}, 0);
		setTotal(newTotal);
	}, [selectedSeats]);


	return (
		<div>
			<h1>Cart</h1>
			<div>
				{selectedSeats.map((seat) => (
					<CartItemStyles key={seat.id}>
						<div>
							<div>{seat.title}</div>
							<div>{seat.artist}</div>
						</div>
						<div className="price">{seat.price} Ar</div>
						<button onClick={() => dispatch(removeTrip(seat.id))}>Cancel</button>
					</CartItemStyles>
				))}
			</div>
			{selectedSeats.length !== 0 ? <p>Total: {total} Ar</p> : 'Empty Cart.'}
		</div>
	);
}

export default connect((state) => ({ selectedSeats: state.selectedSeats }), {
	removeTrip,
})(Booking);

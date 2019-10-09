import React from 'react';
import { useSelector } from 'react-redux';

const Total = props => {
	const { car, additionalPrice } = useSelector(state => state.app);
	return (
		<div className="content">
			<h4>Total Amount: ${car.price + additionalPrice}</h4>
		</div>
	);
};

export default Total;

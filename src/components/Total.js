import React from 'react';
import { useSelector } from 'react-redux';

const Total = props => {
	const { car, store } = useSelector(state => state.app);
	return (
		<div className="content">
			<h4>Total Amount: ${
				car.price + 
				car.features.reduce((total, id) => total + store.find(item=> item.id === id).price, 0)}</h4>
		</div>
	);
};

export default Total;

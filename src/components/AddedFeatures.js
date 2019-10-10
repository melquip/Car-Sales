import React from 'react';
import { useSelector } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
	const { car, store } = useSelector(state => state.app);
	return (
		<div className="content">
			<h6>Added features:</h6>
			{car.features.length ? (
				<ol type="1">
					{car.features.map(itemID => (
						<AddedFeature key={itemID} feature={store.find(item => item.id === itemID)} />
					))}
				</ol>
			) : (
					<p>You can purchase items from the store.</p>
				)}
		</div>
	);
};

export default AddedFeatures;

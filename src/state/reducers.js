import * as types from './actionTypes';
const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image:
			'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	store: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};
export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case types.ADD_ITEM:
			return {
				...state,
				store: [...store, action.payload]
			}
		case types.REMOVE_ITEM:
			return {
				...state,
				store: state.store.filter(item => item.id !== action.payload)
			}
		default:
			return state;
	}
}
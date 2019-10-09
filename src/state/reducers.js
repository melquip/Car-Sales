import * as types from './actionTypes';
const initialAdditionalPrice = 0;
const initialCar = {
	price: 26395,
	name: '2019 Ford Mustang',
	image:
		'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
	features: []
};
const initialStore = [
	{ id: 1, name: 'V-6 engine', price: 1500 },
	{ id: 2, name: 'Racing detail package', price: 1500 },
	{ id: 3, name: 'Premium sound system', price: 500 },
	{ id: 4, name: 'Rear spoiler', price: 250 }
]
export const addPriceReducer = (state = initialAdditionalPrice, action) => {
	switch(action.type) {
		default:
			return state;
	}
}
export const carReducer = (state = initialCar, action) => {
	switch(action.type) {
		default:
			return state;
	}
}
export const storeReducer = (state = initialStore, action) => {
	switch(action.type) {
		case types.ADD_ITEM:
			return [...state, action.payload];
		case types.REMOVE_ITEM:
			return state.store.filter(item => item.id !== action.payload);
		default:
			return state;
	}
}
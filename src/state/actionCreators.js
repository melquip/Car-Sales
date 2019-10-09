import * as types from './actionTypes';

export const addItem = (item) => {
	return { type: types.ADD_ITEM, payload: item }
}
export const removeItem = (id) => {
	return { type: types.REMOVE_ITEM, payload: id }
}
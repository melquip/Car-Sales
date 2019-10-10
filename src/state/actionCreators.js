import * as types from './actionTypes';

export const addItem = (id) => {
	return { type: types.ADD_ITEM, payload: id }
}
export const removeItem = (id) => {
	return { type: types.REMOVE_ITEM, payload: id }
}
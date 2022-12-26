/* eslint-disable import/no-anonymous-default-export */
import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";

export default (campgrounds = [], action) => {
	switch (action.type) {
		case CREATE:
			return [...campgrounds, action.payload];
		case FETCH_ALL:
			return action.payload;
		default:
			return campgrounds;
	}
};

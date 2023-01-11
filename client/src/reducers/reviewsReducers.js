import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (reviews = [], action) => {
	switch (action.type) {
		case CREATE:
			return [...reviews, action.payload];
		case FETCH_ALL:
			return action.payload;
		default:
			return reviews;
	}
};

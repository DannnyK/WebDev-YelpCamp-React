import * as api from "../api";
import { CREATE, DELETE, UPDATE, FETCH_ALL } from "../constants/actionTypes";

export const getReviews = () => async (dispatch) => {
	try {
		const { data } = await api.fetchReviews();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createReview = (data) => async (dispatch) => {
	try {
		const { reviewData } = await api.createReview(data);
		dispatch({ type: CREATE, payload: reviewData });
	} catch (error) {
		console.log(error.message);
	}
};

export const updateReview = (id, review) => async (dispatch) => {
	try {
		const { data } = await api.updateReview(id, review);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteReview = (id) => async (dispatch) => {
	try {
		const { data } = await api.destroyReview(id);
		dispatch({ type: DELETE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

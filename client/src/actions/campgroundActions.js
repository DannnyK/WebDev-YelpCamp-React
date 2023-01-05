import * as api from "../api";
import { CREATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

export const getCampgrounds = () => async (dispatch) => {
	try {
		const { data } = await api.fetchCampgrounds();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

//for some reason this function just straight up posts the data with or without dispatch
//not complaining tho
export const createCampgrounds = (data) => async (dispatch) => {
	try {
		const { campgroundData } = await api.createCampground(data);

		dispatch({ type: CREATE, payload: campgroundData });
	} catch (error) {
		console.log(error);
	}
};

export const findCampground = (id) => async (dispatch) => {
	try {
		const { data } = await api.fetchCampground(id);
		console.log(data);
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteCampground = (id) => async (dispatch) => {
	try {
		const { data } = await api.destroyCampground(id);
		dispatch({ type: DELETE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

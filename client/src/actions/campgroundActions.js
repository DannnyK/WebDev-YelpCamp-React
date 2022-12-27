import * as api from "../api";
import { CREATE, FETCH_ALL } from "../constants/actionTypes";

export const getCampgrounds = () => async (dispatch) => {
	try {
		const { data } = await api.fetchCampgrounds();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

import axios from "axios";

const url = "http://localhost:5400/campgrounds";
const reviewUrl = "http://localhost:5400/reviews";

export const fetchCampgrounds = async () => {
	const result = await axios.get(url).then((response) => response);
	return result;
};

export const createCampground = (newCampground) =>
	axios.post(url, newCampground);

export const updateCampground = (id, updatedCampground) =>
	axios.patch(`${url}/${id}`, updatedCampground);

export const fetchCampground = async (id) => {
	const result = await axios.get(`${url}/${id}`).then((response) => {
		return response;
	});
	console.log(`${url}/${id}`);
	console.log(result);
	return result;
};

export const destroyCampground = async (id) => {
	const result = await axios.delete(`${url}/${id}`).then((response) => {
		return response;
	});
	return result;
};
/////////////////////////////////////////////////////////////////////////////////
//reviews
export const fetchReviews = async () => {
	const result = await axios.get(reviewUrl).then((response) => {
		return response;
	});
	return result;
};
export const createReview = (newReview) => axios.post(reviewUrl, newReview);
export const updateReview = (id, updatedReview) =>
	axios.patch(`${reviewUrl}/${id}`, updatedReview);
export const destroyReview = async (id) => {
	const result = await axios.delete(`${reviewUrl}/${id}`).then((response) => {
		return response;
	});
	return result;
};
/////////////////////////////////////////////////////////////////////////////////

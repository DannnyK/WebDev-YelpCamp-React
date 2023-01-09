import axios from "axios";

const url = "http://localhost:5400/campgrounds";

export const fetchCampgrounds = async () => {
	const result = await axios.get(url).then((response) => {
		return response;
	});
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

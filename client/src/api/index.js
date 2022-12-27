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

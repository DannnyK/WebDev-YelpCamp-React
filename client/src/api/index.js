import axios from "axios";

const url = "http://localhost:5400/campgrounds";

export const fetchCampgrounds = () => axios.get(url);

export const createCampground = (newCampground) =>
	axios.post(url, newCampground);

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { fetchCampground } from "../api";

const ShowCampground = (props) => {
	const [currentCamp, setCurrentCamp] = useState();
	const id = props.currentId;

	const fetchCampground = async (id) => {
		await axios
			.get(`http://localhost:5400/campgrounds/${id}`)
			.then((response) => {
				setCurrentCamp(response.data);
				console.log("success");
			});
	};

	useEffect(() => {
		fetchCampground(id);
	}, [id]);

	return (
		<>
			<h1>Showing Camp</h1>
			<div className="main">
				<p> {currentCamp?.title}</p>
				<p> {currentCamp?.price}</p>
			</div>
		</>
	);
};

export default ShowCampground;

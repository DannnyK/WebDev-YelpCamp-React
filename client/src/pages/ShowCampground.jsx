import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCampground } from "../actions/campgroundActions";
import { useNavigate } from "react-router-dom";

const ShowCampground = (props) => {
	const [currentCamp, setCurrentCamp] = useState();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const id = props.currentId;

	const fetchCampground = async (id) => {
		try {
			setLoading(true);
			await axios
				.get(`http://localhost:5400/campgrounds/${id}`)
				.then((response) => {
					setLoading(false);
					setCurrentCamp(response.data);
				});
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	useEffect(() => {
		fetchCampground(id);
	}, [id]);

	function deleteCampgroundConfirm() {
		const confirm = prompt("are you sure? y/n");
		if (confirm.toLowerCase() === "y") {
			dispatch(deleteCampground(id));
			navigate("/campgrounds");
		} else {
			alert("not deleted");
		}
	}

	return loading ? (
		<>
			<div className="main">
				<h1>loading</h1>
			</div>
		</>
	) : (
		<>
			<h1>Showing {currentCamp?.title}</h1>
			<div className="main">
				<p> {currentCamp?.title}</p>
				<p> {currentCamp?.price}</p>
				<button
					onClick={() => {
						deleteCampgroundConfirm();
					}}
				>
					Delete
				</button>
			</div>
		</>
	);
};

export default ShowCampground;

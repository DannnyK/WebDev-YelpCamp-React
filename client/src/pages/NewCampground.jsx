import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { createCampgrounds } from "../actions/campgroundActions";

import "../App.css";

const NewCampground = () => {
	const [campgroundData, setCampgroundData] = useState({
		title: "",
		price: "",
		description: "",
		location: "",
	});

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createCampgrounds(campgroundData));
		navigate("/campgrounds");
	};

	const clear = () => {};

	return (
		<div className="main">
			<form
				action="/post"
				autoComplete="off"
				noValidate
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="title"
					id="title"
					value={campgroundData.title}
					onChange={(e) =>
						setCampgroundData({ ...campgroundData, title: e.target.value })
					}
					placeholder="Title"
				/>
				<input
					type="text"
					name="price"
					id="price"
					value={campgroundData.price}
					onChange={(e) =>
						setCampgroundData({ ...campgroundData, price: e.target.value })
					}
					placeholder="Price"
				/>
				<input
					type="text"
					name="description"
					id="description"
					value={campgroundData.description}
					onChange={(e) =>
						setCampgroundData({
							...campgroundData,
							description: e.target.value,
						})
					}
					placeholder="description"
				/>
				<input
					type="text"
					name="location"
					id="location"
					value={campgroundData.location}
					onChange={(e) =>
						setCampgroundData({ ...campgroundData, location: e.target.value })
					}
					placeholder="location"
				/>
				<button>Submit</button>
				<button onClick={clear}>Clear</button>
			</form>
		</div>
	);
};

export default NewCampground;

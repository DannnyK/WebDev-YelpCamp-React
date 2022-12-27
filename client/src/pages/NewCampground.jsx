import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampgrounds } from "../actions/campgroundActions";

import "../App.css";

const NewCampground = () => {
	const [campgroundData, setCampgroundData] = useState({
		title: "",
		price: "",
		description: "",
		location: "",
	});

	const dispatch = useDispatch();

	const handlesubmit = (e) => {
		e.preventDefault();
		console.log(campgroundData);
		
		dispatch(createCampgrounds(campgroundData));
	};

	const clear = () => {};

	return (
		<div className="main">
			<form
				action="/post"
				autoComplete="off"
				noValidate
				onSubmit={handlesubmit}
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

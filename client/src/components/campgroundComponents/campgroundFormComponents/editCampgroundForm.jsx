import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCampground } from "../../../actions/campgroundActions";

const EditCampgroundForm = ({ currentId }) => {
	const [campgroundData, setCampgroundData] = useState({
		title: "",
		price: "",
		description: "",
		location: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//////////////////////////////////////////////////////////////////////////////////////////////
	function redirect() {
		const timeout = setTimeout(() => {
			window.location.replace("http://localhost:3000/campgrounds");
		}, 200);

		return () => clearTimeout(timeout);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////

	const fetchCampground = async (id) => {
		try {
			await axios
				.get(`http://localhost:5400/campgrounds/${id}`)
				.then((response) => {
					setCampgroundData(response.data);
				});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchCampground(currentId);
	}, [currentId]);
	//////////////////////////////////////////////////////////////////////////////////////////////

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateCampground(currentId, campgroundData));
		navigate(`/campgrounds/${currentId}`);
	};
	const clear = () => {
		//do something
	};
	//////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<div>
			<h1>edit</h1>
			<form
				className="form"
				action="/post"
				autoComplete="off"
				noValidate
				onSubmit={handleSubmit}
			>
				<input
					className="form-input"
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
					className="form-input"
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
					className="form-input"
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
					placeholder="Description"
				/>
				<input
					className="form-input"
					type="text"
					name="location"
					id="location"
					value={campgroundData.location}
					onChange={(e) =>
						setCampgroundData({ ...campgroundData, location: e.target.value })
					}
					placeholder="Location"
				/>
				<div className="form-footer">
					<button className="btn-default">Submit</button>

					<button className="btn-regular" onClick={clear}>
						Clear
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditCampgroundForm;

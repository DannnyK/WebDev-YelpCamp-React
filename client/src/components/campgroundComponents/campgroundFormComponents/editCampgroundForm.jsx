import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCampground } from "../../../actions/campgroundActions";

const EditCampgroundForm = ({ currentId, setCurrentId }) => {
	const [campgroundData, setCampgroundData] = useState({
		title: "",
		price: "",
		description: "",
		location: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//////////////////////////////////////////////////////////////////////////////////////////////

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
	const clear = (e) => {
		e.preventDefault();
		setCampgroundData({
			title: "",
			price: "",
			description: "",
			location: "",
		});
		//do something
	};
	const handleCancel = () => {
		navigate(`/campgrounds/${currentId}`);
		setCurrentId(null);
	};
	//////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<div>
			<h1>Edit</h1>
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
				<textarea
					className="form-input-textarea"
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
					<button className="btn-success-expand">Submit</button>
					<button className="btn-warning-expand" onClick={clear}>
						Clear
					</button>
					<button className="btn-danger-expand" onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditCampgroundForm;

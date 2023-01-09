import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampgrounds } from "../../../actions/campgroundActions";

const NewCampgroundForm = () => {
	const [campgroundData, setCampgroundData] = useState({
		title: "",
		price: "",
		description: "",
		location: "",
	});
	const dispatch = useDispatch();

	function redirect() {
		const timeout = setTimeout(() => {
			window.location.replace("http://localhost:3000/campgrounds");
		}, 200);

		return () => clearTimeout(timeout);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createCampgrounds(campgroundData));
		redirect();
	};
	const clear = () => {
		//do something
	};
	return (
		<div>
			<h1>Create a new Campground</h1>
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

export default NewCampgroundForm;

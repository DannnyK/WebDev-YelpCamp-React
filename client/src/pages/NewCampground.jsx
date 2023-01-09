import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import EditCampgroundForm from "../components/campgroundComponents/campgroundFormComponents/editCampgroundForm";
import NewCampgroundForm from "../components/campgroundComponents/campgroundFormComponents/newCampgroundForm";
const NewCampground = ({ currentId }) => {
	const [editState, setEditState] = useState(false);

	useEffect(() => {
		if (currentId) {
			setEditState(true);
		}
	}, [currentId]);

	return editState ? (
		<>
			<div className="main">
				<EditCampgroundForm currentId={currentId} />
			</div>
		</>
	) : (
		<>
			<div className="main">
				<NewCampgroundForm currentId={currentId} />
			</div>
		</>
	);
};

export default NewCampground;

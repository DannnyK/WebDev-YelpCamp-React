import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampgrounds } from "../actions/campgroundActions";
import CampgroundListComponent from "../components/campgroundComponents/campgroundListComponent";
import "../App.css";

const CampgroundsIndex = ({ currentId, setCurrentId }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCampgrounds());
	}, [dispatch]);

	return (
		<div>
			<h1>Index</h1>
			<div className="main">
				<CampgroundListComponent
					currentId={currentId}
					setCurrentId={setCurrentId}
				/>
			</div>
		</div>
	);
};

export default CampgroundsIndex;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCampgrounds } from "../actions/campgroundActions";
import CampgroundListComponent from "../components/campgroundComponents/campgroundListComponent";
import "../App.css";

const CampgroundsIndex = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCampgrounds());
	}, [dispatch]);

	return (
		<div>
			<h1>Index</h1>
			<div className="main">
				<h1>hello</h1>
				<CampgroundListComponent setCurrentId={setCurrentId} />
			</div>
		</div>
	);
};

export default CampgroundsIndex;

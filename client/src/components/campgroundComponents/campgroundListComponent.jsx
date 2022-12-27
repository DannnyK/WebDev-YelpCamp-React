import React from "react";
import { useSelector } from "react-redux";
import CampgroundComponent from "./campgroundComponent";

const CampgroundListComponent = ({ setCurrentId }) => {
	//this is where the camps are searched for in the state, this comes from reducers.index btw
	const campgrounds = useSelector((state) => state.campgroundsReducers);

	console.log(campgrounds.length);

	return campgrounds.length ? (
		<>
			<div className="campgroundlist">
				{campgrounds?.map((camp) => (
					<CampgroundComponent camp={camp} />
				))}
			</div>
		</>
	) : (
		<div className="campgroundlist">
			<h1>No posts found</h1>
		</div>
	);
};

export default CampgroundListComponent;

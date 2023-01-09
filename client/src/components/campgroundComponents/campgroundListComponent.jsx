import React from "react";
import { useSelector } from "react-redux";
import CampgroundComponent from "./campgroundComponent";

const CampgroundListComponent = ({ setCurrentId }) => {
	//this is where the camps are searched for in the state, this comes from reducers.index btw
	// window.location.reload(false);

	const campgrounds = useSelector((state) => state.campgroundsReducers);

	return campgrounds.length ? (
		<>
			<div className="campground-list">
				{campgrounds?.map((camp) => (
					<CampgroundComponent camp={camp} setCurrentId={setCurrentId} />
				))}
			</div>
		</>
	) : (
		<div className="campground-list">
			<h1>No posts found</h1>
		</div>
	);
};

export default CampgroundListComponent;

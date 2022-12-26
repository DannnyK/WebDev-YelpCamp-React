import React from "react";
import { useSelector } from "react-redux";

const CampgroundComponent = ({ setCurrentId }) => {
	const campground = useSelector((state) => state.campground);

	return (
		<>
			<div className="post">
				<div className="tag">
					<h1>Title</h1>
					<h2>Description</h2>
				</div>
			</div>
		</>
	);
};

export default CampgroundComponent;

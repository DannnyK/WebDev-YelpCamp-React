import React from "react";
import { useSelector } from "react-redux";

const CampgroundListComponent = ({ setCurrentId }) => {
	const camps = useSelector((state) => state.campgrounds);

	return (
		<>
			<div className="campgroundlist">
				<div className="post">
					<div className="tag">
						<h1>Title</h1>
						<h2>Description</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default CampgroundListComponent;

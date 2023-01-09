import React from "react";
import ReviewFormComponent from "../../reviewComponents/reviewFormComponent";
import ReviewListComponent from "../../reviewComponents/reviewListComponent";

const CampgroundReviewsComponent = () => {
	return (
		<>
			<div className="card">
				<ReviewFormComponent />
				<ReviewListComponent />
			</div>
		</>
	);
};

export default CampgroundReviewsComponent;

import React from "react";
import ReviewComponent from "./reviewComponent";
const ReviewListComponent = () => {
	return (
		<>
			<div className="campground-reviews-list">
                <ReviewComponent/>
                <ReviewComponent/>
                <ReviewComponent/>
                <ReviewComponent/>
            </div>
		</>
	);
};

export default ReviewListComponent;

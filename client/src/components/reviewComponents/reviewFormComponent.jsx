import React from "react";

const ReviewFormComponent = () => {
	return (
		<>
			<form className="campground-review-input">
				<textarea
					placeholder=" Leave a review"
					name=""
					id=""
					cols="30"
					rows="10"
				/>
				<div className="footer">
					<button className="btn-default">Post</button>
				</div>
			</form>
		</>
	);
};

export default ReviewFormComponent;

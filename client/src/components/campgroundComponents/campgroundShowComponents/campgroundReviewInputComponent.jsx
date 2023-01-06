import React from "react";

const CampgroundReviewsComponent = () => {
	return (
		<>
			<div className="card">
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
				<div className="campground-reviews-list">
					<div className="campground-review">
						<h1>review</h1>
						<p>This shit suck</p>
					</div>
					<div className="campground-review">
						<h1>review</h1>
						<p>what even is this</p>
					</div>
					<div className="campground-review">
						<h1>review</h1>
						<p>wow, this is terrible</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CampgroundReviewsComponent;

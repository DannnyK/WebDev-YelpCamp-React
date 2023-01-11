import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ReviewComponent from "./reviewComponent";
const ReviewListComponent = (props) => {
	const { id } = useParams();
	const reviews = useSelector((state) => state.reviewsReducers);

	const { reviewData, setReviewData, reviewCount, setReviewCount } = props;

	let arr = [];
	reviews.forEach((review) => {
		if (review.postedOnCampId === id) {
			arr.push(review);
		}
	});
	useEffect(() => {
		setReviewCount(arr.length);
	});
	return arr.length ? (
		<>
			<div className="campground-reviews-list">
				{arr.map((review) => (
					<ReviewComponent
						reviewData={reviewData}
						setReviewData={setReviewData}
						key={review._id}
						review={review}
					/>
				))}
			</div>
		</>
	) : (
		<div className="campground-reviews-list">
				there are no reviews
			<h1>¯\_(ツ)_/¯</h1>
		</div>
	);
};

export default ReviewListComponent;

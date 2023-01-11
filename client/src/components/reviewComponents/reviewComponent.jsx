import React, { useState } from "react";
import { deleteReview } from "../../actions/reviewActions";
import { useDispatch } from "react-redux";

const ReviewComponent = (props) => {
	const { review } = props;
	const reviewId = review?._id;
	const dispatch = useDispatch();

	function handleDelete() {
		dispatch(deleteReview(reviewId)).then(() => {
			window.location.reload();
		});
	}
	function handleEdit(e) {
		props.setReviewData(review);
	}

	return (
		<>
			<div className="campground-review">
				<div className="campground-review-body">
					<h1>{review?.title || "title"}</h1>
					<p className={review.body ? "none" : "muted"}>
						{review?.body ||
							"This reviewer opted to not elaborate further, this review might not be accurate"}
					</p>
				</div>
				<div className="campground-review-footer">
					<div className="section-1">
						<button
							onClick={() => {
								handleEdit();
							}}
							className="btn-warning-expand"
						>
							Edit
						</button>
						<button
							className="btn-danger-expand"
							onClick={() => {
								handleDelete();
							}}
						>
							Delete
						</button>
					</div>
					<div className="section-2">
						<p className="review-author muted medium">
							{review?.author || "This review does not have an author"}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReviewComponent;

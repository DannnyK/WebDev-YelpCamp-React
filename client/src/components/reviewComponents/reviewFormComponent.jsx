import React, { useState } from "react";
import { createReview, updateReview } from "../../actions/reviewActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ReviewFormComponent = ({ reviewData, setReviewData }) => {
	const [reviewId, setReviewId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (reviewData) {
			setReviewId(reviewData._id);
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (reviewId) {
			dispatch(updateReview(reviewId, reviewData));
		}
		dispatch(createReview(reviewData)).then(() => {
			window.location.reload();
		});
	};
	function clear(e) {
		e.preventDefault();
		setReviewData(null);
	}

	return (
		<>
			<form className="campground-review-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					id="title"
					placeholder="Enter a Title"
					value={reviewData.title}
					onChange={(e) =>
						setReviewData({ ...reviewData, title: e.target.value })
					}
				/>
				<textarea
					placeholder="Leave a review"
					name="body"
					id="body"
					cols="30"
					rows="10"
					value={reviewData.body}
					onChange={(e) =>
						setReviewData({ ...reviewData, body: e.target.value })
					}
				/>
				<div className="footer">
					<button
						className={reviewId ? "btn-warning-expand" : "btn-success-expand"}
					>
						{reviewId ? "Update" : "Post"}
					</button>
					<button
						className="btn-danger-expand"
						onClick={() => {
							clear();
						}}
					>
						Cancel
					</button>
				</div>
			</form>
		</>
	);
};

export default ReviewFormComponent;

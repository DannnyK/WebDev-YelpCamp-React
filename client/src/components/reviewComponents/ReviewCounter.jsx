import React from "react";

const ReviewCounter = (props) => {
	const { reviewCount } = props;
	return reviewCount > 0 ? (
		<>
			<p className="muted small">
				{reviewCount < 2
					? `This post only has ${reviewCount} review`
					: `${reviewCount} reviews`}
			</p>
		</>
	) : (
		<>
			<p className="muted small">This post has no reviews yet</p>
		</>
	);
};

export default ReviewCounter;

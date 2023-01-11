import React, { useState } from "react";
import ReviewFormComponent from "../../reviewComponents/reviewFormComponent";
import ReviewListComponent from "../../reviewComponents/reviewListComponent";
import { getReviews } from "../../../actions/reviewActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";

const CampgroundReviewsComponent = (props) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { reviewCount, setReviewCount } = props;

	const [reviewData, setReviewData] = useState({
		title: "",
		body: "",
		author: "",
		postedOnCampId: id,
	});

	useEffect(() => {
		dispatch(getReviews());
	}, [dispatch]);

	return (
		<>
			<ReviewFormComponent
				reviewData={reviewData}
				setReviewData={setReviewData}
			/>
			<ReviewListComponent
				reviewData={reviewData}
				setReviewData={setReviewData}
				reviewCount={reviewCount}
				setReviewCount={setReviewCount}
			/>
		</>
	);
};

export default CampgroundReviewsComponent;

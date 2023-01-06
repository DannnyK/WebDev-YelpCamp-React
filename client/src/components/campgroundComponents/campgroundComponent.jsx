import React from "react";
import { useNavigate } from "react-router-dom";

const CampgroundComponent = (props) => {
	const navigate = useNavigate();

	const { camp } = props;
	const campId = camp?._id;

	const redirect = () => {
		navigate(`/campgrounds/${campId}`);
	};

	return camp ? (
		<div
			className="post"
			onClick={() => {
				redirect();
			}}
		>
			<div className="tag">
				<h1>{camp?.title}</h1>
				<h2>{camp?.description}</h2>
				<h3>{camp?.location}</h3>
				<h4>{camp?.price}</h4>
			</div>
		</div>
	) : (
		<div className="post">
			<div className="tag">Loading try refreshing the page</div>
		</div>
	);
};

export default CampgroundComponent;

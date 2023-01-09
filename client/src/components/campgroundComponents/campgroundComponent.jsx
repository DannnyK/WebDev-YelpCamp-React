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
			<div className="post-image">
				uhhh... theres supposed to be an image here
			</div>
			<div className="tag">
				<h1 className="tag-header">{camp?.title}</h1>
				<h2>{camp?.description}</h2>
				<div className="tag-footer">
					<h3 className="muted">{camp?.location}</h3>
					<h4 className="muted">{camp?.price}/night</h4>
				</div>
			</div>
		</div>
	) : (
		<div className="post">
			<div className="tag">Loading try refreshing the page</div>
		</div>
	);
};

export default CampgroundComponent;

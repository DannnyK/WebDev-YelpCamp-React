import React from "react";
import { useNavigate } from "react-router-dom";
import NoImageError from "../NoImageError";

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
				<NoImageError />
			</div>
			<div className="tag">
				<h1 className="tag-header">{camp?.title}</h1>
				<p className="tag-body">{camp?.description}</p>
				<div className="tag-footer">
					<h3 className="muted">{camp?.location}</h3>
					<h4 className="muted ">{camp?.price}/night</h4>
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

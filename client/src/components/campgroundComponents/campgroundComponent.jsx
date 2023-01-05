import React from "react";
import { Link } from "react-router-dom";

const CampgroundComponent = (props) => {
	const { camp, setCurrentId } = props;
	const campId = props.camp?._id;

	return (
		<div className="post">
			<div className="tag">
				<p>{campId}</p>
				<h1>{camp?.title}</h1>
				<h2>{camp?.price}</h2>

				<Link
					onClick={() => {
						setCurrentId(campId);
					}}
					to={{
						pathname: `/campgrounds/${campId}`,
					}}
				>
					edit
				</Link>
			</div>
		</div>
	);
};

export default CampgroundComponent;

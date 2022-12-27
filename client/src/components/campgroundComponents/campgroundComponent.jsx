import React from "react";

const CampgroundComponent = ({ camp }) => {
	return (
		<div className="post">
			<div className="tag">
				<h1>{camp.title}</h1>
				<h2>{camp.price}</h2>
			</div>
		</div>
	);
};

export default CampgroundComponent;

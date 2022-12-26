import React from "react";

const NewCampground = () => {
	return (
		<div className="main">
			<form action="/post">
				<input type="text" name="title" id="title" />
			</form>
		</div>
	);
};

export default NewCampground;

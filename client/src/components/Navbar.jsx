import React from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////
const Navbar = (props) => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/campgrounds">Campgrounds</Link>
			<Link to="/campgrounds/new">NewCamp</Link>
		</div>
	);
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
////////////////////////////////////////
const Navbar = (props) => {
	return (
		<div className="nav-main">
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/campgrounds">Campgrounds</Link>
				<Link to="/campgrounds/new">NewCamp</Link>
			</div>
			<div className="middle">{props.currentId}</div>
			<div className="nav-actions">Login/Signup</div>
		</div>
	);
};

export default Navbar;

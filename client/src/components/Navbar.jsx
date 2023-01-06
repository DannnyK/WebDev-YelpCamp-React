import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
////////////////////////////////////////
const Navbar = (props) => {
	return (
		<div className="nav-main">
			<div className="nav-links">
				<Link className="nav-link" to="/">
					Home
				</Link>
				<Link className="nav-link" to="/campgrounds">
					Campgrounds
				</Link>
				<Link className="nav-link" to="/campgrounds/new">
					NewCamp
				</Link>
			</div>
			<div className="middle">{props.currentId}</div>
			<div className="nav-actions">Login/Sign Up</div>
		</div>
	);
};

export default Navbar;

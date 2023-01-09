import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
////////////////////////////////////////
const Navbar = (props) => {
	return (
		<div className="nav-main">
			<div className="nav-links">
				<Link className="nav-link" to="/">
					home
				</Link>
				<Link className="nav-link" to="/campgrounds">
					campgrounds
				</Link>
				<Link className="nav-link" to="/campgrounds/new">
					newCampground
				</Link>
			</div>
			<div className="middle">{props.currentId}</div>
			<div className="nav-actions">login/signUp</div>
		</div>
	);
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className="main">
			<div className="display">
				<h1 id="unselectable" className="home-title">
					yelpCamp;
				</h1>
				<div className="home-links">
					{">"}{" "}
					<Link className="home-link" to="/campgrounds">
						campgrounds
					</Link>
				</div>
			</div>
			<div className="home-footer">
				<p id="unselectable" className="muted">
					Daniel Kruger (c) 2023 MongoDB-Express-Node-React
				</p>
			</div>
		</div>
	);
};

export default Home;

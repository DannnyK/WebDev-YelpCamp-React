import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCampground } from "../actions/campgroundActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import CampgroundReviewsComponent from "../components/campgroundComponents/campgroundShowComponents/campgroundReviewInputComponent";
import Loader from "../components/loader/loader";

const ShowCampground = (props) => {
	const [currentCamp, setCurrentCamp] = useState();
	const [loading, setLoading] = useState(false);
	const [foundStatus, setFoundStatus] = useState(true);
	const navigate = useNavigate();
	const { id } = useParams();

	const dispatch = useDispatch();

	// const id = props.currentId;
	const { currentId, setCurrentId } = props;

	const fetchCampground = async (id) => {
		try {
			setLoading(true);
			await axios
				.get(`http://localhost:5400/campgrounds/${id}`)
				.then((response) => {
					setLoading(false);
					setCurrentCamp(response.data);
				});
		} catch (error) {
			setLoading(true);
			setFoundStatus(false);
			console.error(error);
		}
	};

	useEffect(() => {
		fetchCampground(id);
	}, [id]);

	function redirect() {
		const timeout = setTimeout(() => {
			window.location.replace("http://localhost:3000/campgrounds");
		}, 200);

		return () => clearTimeout(timeout);
	}

	function handleEdit() {
		setCurrentId(id);
		navigate(`/campgrounds/new`);
	}

	function deleteCampgroundConfirm() {
		const confirm = prompt("are you sure? y/n");
		if (confirm.toLowerCase() === "y") {
			dispatch(deleteCampground(id));
			setCurrentId(null);
			redirect();
		} else {
			alert("not deleted");
		}
	}

	return loading ? (
		<>
			<div className="main">
				<div className="display">
					<Loader />
					{foundStatus}
				</div>
			</div>
		</>
	) : (
		<>
			<div className="show-main">
				<div className="card">
					<div className="card-image">
						{/* uhhhh... there's supposed to be an image here */}
					</div>
					<div className="card-bottom">
						<div className="card-details">
							<div className="card-details-title">
								<h1> {currentCamp?.title} </h1>
							</div>
							<div className="card-details-description">
								<h3>{currentCamp?.description}</h3>
								<p>{currentCamp?.location}</p>
								<p className="muted">{currentCamp?.price}/night</p>
							</div>
						</div>
						<div className="card-footer">
							<button
								onClick={() => {
									handleEdit();
								}}
								className="btn-warning-expand"
							>
								Edit
							</button>
							<button
								className="btn-danger-expand"
								onClick={() => {
									deleteCampgroundConfirm();
								}}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
				<CampgroundReviewsComponent />
			</div>
		</>
	);
};

export default ShowCampground;

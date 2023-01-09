//Create, Update, Delete, fetch
import mongoose from "mongoose";
import campgroundReviewModel from "../models/campgroundReviewModel.js";
//////////////////////////////////////////////////////////////////////////////
export const createCampgroundReview = async (req, res) => {
	const data = req.body;
	const newCampgroundReview = new campgroundReviewModel(data);
	try {
		await newCampgroundReview.save();
		res.status(201).json(newCampgroundReview);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
//////////////////////////////////////////////////////////////////////////////
export const getCampgroundReviews = async (req, res) => {
	try {
		const result = await campgroundReviewModel.find({});
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
//////////////////////////////////////////////////////////////////////////////
export const updateCampgroundReview = async (req, res) => {
	const { id: _id } = req.params;
	const review = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("There are no reviews with that ID");
	const updateCampgroundReview = await campgroundReviewModel.findByIdAndUpdate(
		_id,
		{ ...review, _id },
		{ new: true }
	);
	res.json(updateCampgroundReview);
};
//////////////////////////////////////////////////////////////////////////////

export const deleteCampgroundReview = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No review with that ID");
	await campgroundReviewModel.findByIdAndRemove(id);
	res.json({ message: "Review deleted successfully" });
};

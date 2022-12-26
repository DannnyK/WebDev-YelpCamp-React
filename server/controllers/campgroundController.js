import CampgroundModel from "../models/campgroundModel.js";
import mongoose from "mongoose";
///////////////////////////////////////////////////////////////////////////////////////
//Create
export const createCampground = async (req, res) => {
	const data = req.body;

	const newCampground = new CampgroundModel(data);
	try {
		await newCampground.save();
		res.send(req.body);
		// res.status(201).json(newCampground);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
///////////////////////////////////////////////////////////////////////////////////////
//Get
export const getCampgrounds = async (req, res) => {
	try {
		const result = CampgroundModel.find({});
		res.send(result);
		res.status(200).json(result);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
///////////////////////////////////////////////////////////////////////////////////////
//Update
export const updateCampground = async (req, res) => {
	const { id: _id } = req.params;

	const campground = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No Camp with that ID!");
	const updateCampground = await CampgroundModel.findByIdAndUpdate(
		_id,
		{ ...campground, _id },
		{ new: true }
	);
	res.json(updateCampground);
};
///////////////////////////////////////////////////////////////////////////////////////
//Delete
export const deleteCampground = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No Camp with that ID!");

	await CampgroundModel.findByIdAndRemove(id);
	res.json({ message: "Campground deleted successfully" });
};
///////////////////////////////////////////////////////////////////////////////////////

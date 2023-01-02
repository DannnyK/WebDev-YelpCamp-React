import campgroundModel from "../models/campgroundModel.js";
import mongoose from "mongoose";
///////////////////////////////////////////////////////////////////////////////////////
//Create
export const createCampground = async (req, res) => {
	const data = req.body;

	const newCampground = new campgroundModel(data);
	try {
		await newCampground.save();

		res.status(201).json(newCampground);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
///////////////////////////////////////////////////////////////////////////////////////
//Get
export const getCampgrounds = async (req, res) => {
	try {
		const result = await campgroundModel.find({});
		console.log(result);
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
	const updateCampground = await campgroundModel.findByIdAndUpdate(
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

	await campgroundModel.findByIdAndRemove(id);
	res.json({ message: "Campground deleted successfully" });
};
///////////////////////////////////////////////////////////////////////////////////////
//Show Camp

export const showCampground = async (req, res) => {
	const { id: _id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("Could not find that Campground!");
	const showCampground = await campgroundModel.findById(_id);
	res.json(showCampground);
};

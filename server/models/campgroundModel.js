import mongoose from "mongoose";
const Schema = mongoose.Schema;
const appName = "react";

//////////////////////////////////////////////////////////////////////////////
//schemas
const CampgroundSchema = new Schema(
	{
		title: String,
		price: String,
		description: String,
		location: String,
	},
	{
		collection: `${appName}Campgrounds`,
	}
);

const campgroundModel = mongoose.model("Campground", CampgroundSchema);

export default campgroundModel;
//////////////////////////////////////////////////////////////////////////////

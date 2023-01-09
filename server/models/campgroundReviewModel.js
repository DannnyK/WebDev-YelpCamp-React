import mongoose from "mongoose";
const Schema = mongoose.Schema;
const appName = "react";

//////////////////////////////////////////////////////////////////////////////
//schemas
const CampgroundReviewSchema = new Schema(
	{
		title: String,
		body: String,
		author: String,
	},
	{
		collection: `${appName}CampgroundsReviews`,
	}
);

const campgroundReviewModel = mongoose.model("Review", CampgroundReviewSchema);

export default campgroundReviewModel;
//////////////////////////////////////////////////////////////////////////////

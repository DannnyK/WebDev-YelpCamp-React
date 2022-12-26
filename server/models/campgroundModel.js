import mongoose from "mongoose";
const Schema = mongoose.Schema;
const appName = "WebDev-YelpCamp-React";

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
		collection: `(${appName})-Campgrounds`,
	}
);

const CampgroundModel = mongoose.model("Campground", CampgroundSchema);

export default CampgroundModel;
//////////////////////////////////////////////////////////////////////////////

import mongoose from "mongoose";
import * as cities from "./cities.cjs";
import { CampgroundModel } from "../models/campgroundModel.js";
import { places, descriptors } from "./seedHelper.js";

mongoose.connect(
	"mongodb+srv://Admin:9kDdv8sGG7pb97H@cluster0.esrb9kx.mongodb.net/?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await CampgroundModel.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const camp = new CampgroundModel({
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`,
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});

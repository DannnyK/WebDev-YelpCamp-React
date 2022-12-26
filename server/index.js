import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { LOCALDB, REMOTEDB, PORT } from "./constants/envVars.js";
import campgroundRoutes from "./routes/campgroundRoutes.js";
import CampgroundModel from "./models/campgroundModel.js";

/////////////////////////////////
//express settings
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
/////////////////////////////////
//mongoose settings
mongoose.connect(REMOTEDB);
mongoose.set("strictQuery", true);
/////////////////////////////////
//database connection
const db_connection = mongoose.connection;
db_connection.on("error", () => {
	console.log("error");
});
db_connection.once("open", () => {
	console.log("Database Connected");
});

/////////////////////////////////
// Express actions
app.get("/test1234", async (req, res) => {
	const data = req.body;

	const newCampground = new CampgroundModel({
		title: "Test Title",
		price: "100",
		description: "its nice",
		location: "cape town",
	});
	try {
		await newCampground.save();
		res.status(201).json(newCampground);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
});
app.use("/campgrounds", campgroundRoutes);

app.listen(PORT, () => {
	console.log(`Serving on port ${PORT}`);
});

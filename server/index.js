import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { LOCALDB, REMOTEDB, PORT } from "./constants/envVars.js";
import campgroundRoutes from "./routes/campgroundRoutes.js";
import campgroundModel from "./models/campgroundModel.js";

/////////////////////////////////
//express settings
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/////////////////////////////////
// Express actions
app.get("/test1234", async (req, res) => {
	const data = req.body;

	const newCampground = new campgroundModel({
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

/////////////////////////////////
//database connection
mongoose
	.connect(LOCALDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () =>
			console.log(`server running on port: ${PORT} \nDatabase connected`)
		)
	)
	.catch((error) => console.log(error.message));

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { LOCALDB, REMOTEDB, PORT } from "./constants/envVars.js";
import campgroundRoutes from "./routes/campgroundRoutes.js";
import campgroundReviewsRoutes from "./routes/campgroundReviewsRoutes.js";
import campgroundReviewModel from "./models/campgroundReviewModel.js";
/////////////////////////////////
//express settings
const app = express();

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());

/////////////////////////////////
// Express actions
app.use("/campgrounds", campgroundRoutes);
app.use("/reviews", campgroundReviewsRoutes);

// app.get("/reviews/test", async (req, res) => {
// 	const newReview = new campgroundReviewModel({
// 		title: "Test Title",
// 		body: "Test Body",
// 		author: "No Author yet",
// 	});
// 	try {
// 		await newReview.save();
// 		res.status(201).json(newReview);
// 	} catch (error) {
// 		res.status(404).json({ message: error.message });
// 	}
// });

/////////////////////////////////
//database connection
mongoose
	.connect(REMOTEDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () =>
			console.log(`server running on port: ${PORT} \nDatabase connected`)
		)
	)
	.catch((error) => console.log(error.message));

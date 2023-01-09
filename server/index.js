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

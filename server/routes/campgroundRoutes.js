import express from "express";
import {
	createCampground,
	getCampgrounds,
	updateCampground,
	deleteCampground,
} from "../controllers/campgroundController.js";

const router = express.Router();

router.get("/", getCampgrounds);
router.post("/", createCampground);
router.patch("/:id", updateCampground);
router.delete("/:id", deleteCampground);
export default router;

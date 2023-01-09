import express from "express";
import {
	createCampgroundReview,
	getCampgroundReviews,
	updateCampgroundReview,
	deleteCampgroundReview,
} from "../controllers/campgroundReviewController.js";

const router = express.Router();

router.get("/", getCampgroundReviews);
router.post("/", createCampgroundReview);
router.patch("/:id", updateCampgroundReview);
router.delete("/:id", deleteCampgroundReview);
export default router;

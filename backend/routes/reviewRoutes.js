import { Router } from "express";
import { restrict, isAuthenticated } from "../middleware/authMiddleware.js";
import { getReviews, createReview } from "../controllers/reviewController.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(getReviews)
  .post(isAuthenticated, restrict(["patient"]), createReview);

export default router;

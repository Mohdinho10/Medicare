import { Router } from "express";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import { getCheckoutSession } from "../controllers/bookingController.js";

const router = Router();

router.post("/checkout-session/:doctorId", isAuthenticated, getCheckoutSession);

export default router;

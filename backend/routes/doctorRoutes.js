import { Router } from "express";
import {
  getDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
  getDoctorProfile,
} from "../controllers/doctorController.js";
import { restrict, isAuthenticated } from "../middleware/authMiddleware.js";
import reviewRoutes from "./reviewRoutes.js";

const router = Router();

router.use("/:doctorId/reviews", reviewRoutes);
router.get("/profile", isAuthenticated, restrict(["doctor"]), getDoctorProfile);

router.get("/", getDoctors);
router
  .route("/:id")
  .get(getDoctor)
  .put(isAuthenticated, restrict(["doctor"]), updateDoctor)
  .delete(isAuthenticated, restrict(["doctor"]), deleteDoctor);

export default router;

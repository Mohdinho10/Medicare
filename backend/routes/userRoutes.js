import { Router } from "express";
import {
  login,
  register,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserProfile,
  getMyAppointments,
  logoutUser,
} from "../controllers/userController.js";
import { restrict, isAuthenticated } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.use(isAuthenticated);
router.get("/profile", restrict(["patient"]), getUserProfile);
router.get("/", restrict(["admin"]), getUsers);
router.get(
  "/appointments/my-appointments",
  restrict(["patient"]),
  getMyAppointments
);
router
  .route("/:id")
  .get(restrict(["patient"]), getUser)
  .put(restrict(["patient"]), updateUser)
  .delete(restrict(["patient"]), deleteUser);
router.post("/logout", logoutUser);

export default router;

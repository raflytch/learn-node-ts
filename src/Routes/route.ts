import { Router } from "express";
import { register, login } from "../Controllers/authController";
import { getUsers } from "../Controllers/adminController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, getUsers);

export default router;

import express from "express";
import { getUserDetails, login, logoutPatient, userRegister } from "../controller/userController.js";
import { isUserAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/user/register", userRegister);
router.post("/login", login);
router.get("/user/me", isUserAuthenticated, getUserDetails);
router.get("/user/logout", isUserAuthenticated, logoutPatient);

 export default router;
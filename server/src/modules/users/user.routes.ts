import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

router.post("/signup", userControllers.signup);


router.post("/login", userControllers.login);



export const userRoutes = router;
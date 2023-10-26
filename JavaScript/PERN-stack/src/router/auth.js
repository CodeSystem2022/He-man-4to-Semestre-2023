import {Router} from "express";
import {signin, signoup,sigout,profile} from "../controllers/authcontroller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/singnin", signin);

router.post("/singnup", signup);

router.post("/singout", sigout);

router.post("/profile", isAuth, profile);

export default router;
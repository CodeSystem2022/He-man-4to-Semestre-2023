import {Router} from "express";
import {signin, signoup,sigout,profile} from "../controllers/authcontroller.js";

const router = Router();

router.post("/singnin", signin);

router.post("/singnup", signup);

router.post("/singout", sigout);

router.post("/profile", profile);

export default router;
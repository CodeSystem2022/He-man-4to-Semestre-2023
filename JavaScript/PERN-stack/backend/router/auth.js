import {Router} from "express";
import {signin, signoup,sigout,profile} from "../controllers/authcontroller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { signupSchema, signinSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/singnin",validateSchema(signinSchema), signin);

router.post("/singnup",validateSchema(signupSchema), signup);

router.post("/singout", sigout);

router.post("/profile", isAuth, profile);

export default router;
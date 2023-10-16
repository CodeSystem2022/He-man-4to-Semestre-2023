import {Router} from "express";

const router = Router();

router.post("/singnin", (req, res) => res.send("ingresando"));

router.post("/singnup", (req, res) => res.send("registrando"));

router.post("/singout", (req, res) => res.send("Cerrando sesion"));

router.post("/profile", (req, res) => res.send("perfil de usuario"));

export default router;
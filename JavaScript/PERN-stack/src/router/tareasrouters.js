import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTare, listarTareas } from "../controllers/tareascontrollers";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/tareas', isAuth, listarTareas);
router.get('/tareas/:id', isAuth, listarTare);

router.post('/tareas', isAuth, crearTarea);

router.post('/tareas/:id', isAuth,  actualizarTarea);

router.post('/tareas/:id', isAuth, eliminarTarea);

export default router;
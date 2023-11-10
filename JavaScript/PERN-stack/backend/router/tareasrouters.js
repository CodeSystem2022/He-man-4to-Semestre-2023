import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTare, listarTareas } from "../controllers/tareascontrollers";
import { isAuth } from "../middlewares/auth.middleware.js";
import {validateSchema} from "../middlewares/validate.middleware.js"
import {createTareaSchema, updateTareasSchema} from "../schemas/tareas.schemas.js"

const router = Router();

router.get('/tareas', isAuth, listarTareas);
router.get('/tareas/:id', isAuth, listarTare);

router.post('/tareas', isAuth ,validateSchema(createTareaSchema), crearTarea);

router.post('/tareas/:id', isAuth,validateSchema(updateTareasSchema),  actualizarTarea);

router.post('/tareas/:id', isAuth, eliminarTarea);

export default router;
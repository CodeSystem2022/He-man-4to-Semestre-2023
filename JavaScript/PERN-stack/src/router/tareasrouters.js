import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTare, listarTareas } from "../controllers/tareascontrollers";

const router = Router();

router.get('/tareas', listarTareas);
router.get('/tareas/:id', listarTare);

router.post('/tareas', crearTarea);

router.post('/tareas/:id', actualizarTarea);

router.post('/tareas/:id', eliminarTarea);

export default router;
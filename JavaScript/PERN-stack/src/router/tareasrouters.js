import { Router } from "express";

const router = Router();

router.get('/tareas',(res,req) => res.setEncoding("obteniendo tareas"));

router.get('/tareas/:id',(req, res) => res.send('obteniendo tarea unica'));

router.post('/tareas',(req,res) => res.send("creando tareas"));

router.post('/tareas/:id',(req,res) => res.send("actualizando tarea unica"));

router.post('/tareas/:id',(req, res) => res.send('eliminando tarea unica'));

export default router;
import axios from "./axios";
export const crearTareaRequest = (tarea) => axios.post("/tareas", tarea)
export const listarTareaRequest = () => axios.get("/tareas")
export const eliminarTareaRequest = (id) => axios.delete('/tareas/&{id}')
export const listarTareaRequest = (id)=> axios.get('/tareas/${id}')
export const actualizarTaeaRequest = (id, tarea) => axios.put('/tareas/${id}', tarea)
export const listarTareas =  async (req, res) => {
    console.log(reg.cookie.token);
    const resultado = await pool.query('SELECT * FROM tareas');
    return res.json(resultado.rows);
}
export const listarTarea =  (req, res) => res.send("obteniendo tareas unicas");

export const crearTarea =  (req, res) => res.send("creando tareas ");

export const actualizarTarea =  (req, res) => res.send("actualizando tareas unicas");

export const eliminarTarea =  (req, res) => res.send("eliminando tareas unicas");

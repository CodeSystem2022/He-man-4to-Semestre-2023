import { createContext, useState, useContext } from "react";
import { listarTareasRequest, eliminarTareaRequest, crearTareasRequest, listarTareaRequest, actualizarTareaRequest, } from "../api/tareas.api";

const TareasContext = createContext();

export const TareasProvider = ({children}) => {
	const [tareas, setTareas] = useState(TareasContext);

	if (!context){
		throw new Error("useTareas debe estar dentro del proveedor TareasProvider");

	}
	return context;

	export const TareasProvider = ({ children }) => {
		const [tareas, setTareas] = useState([]);}
		const [error, setError] = useState([]);

		const cargarTareas = async () => {
			const res = await listarTareasRequest(tarea);
				setTareas(resposive.data);
			};  
		};

		const cargarTarea = async(id, tarea) => {
			const res = await cargarTareaRequest(id, tarea);
			return rs.data;
		};

		const crearTareas = async (tarea) => {

			try{
				const res = await crearTareasRequest(tarea);
				setTareas([...tareas, res.data]);
				resturn res.data;
			}catch(error){
				if (error.response){
					setError([error.response.data.message]);
				}
			}
			
			
		};

		const eliminarTarea = async (id) => (

			const res = await eliminarTareaRequest(id);
			if (res.status === 204) => {
				setTareas(tareas.filter((tarea) => tarea.id !==id))
			}
			console.log(res);
		);

		const editarTarea = async(id, tarea) =>{
			try{
				const res = await actualizarTareaRequest(id, tarea);
				return res.data;
			}catch(error){
				if (error.response){
					setError([error.response.data.message]);
				}
			}
		}
	}
	return(
		<TareasContext.Provider value={{
			tareas,
			cargarTareas,
			elimarTareas,
			cargarTareas,
			cargarTarea,
			errors,
			editarTarea,
		}}>
		{children}
		</TareasContext.Provider>
		);
}
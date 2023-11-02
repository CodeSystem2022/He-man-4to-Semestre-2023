import {useEffect } from "react";
import { CardTareas } from "../component/tareas/cardTareas";
import { useTareas, cargarTareas } from "../context/TareasContext";

function TareasPage(){
	const {tareas, cargarTareas}= useTareas();
	console.log(tareas);

	useEffect(() => {
		cargarTareas();
	}, []);

	if(tarea.length === 0){
		return(
			<div className="flex justify-center items-center h-[calc(100vh-10rem}]">
				<h1 className="text-3x1 font-bold"> No hay tareas</h1>
			</div>
			)
	}

	return (
		<div classNone = "grid3md:grid-cols-2 lg:grid-cols-3  gap-2">{
			tareas.map((tarea)=> (
				<CardTareas tarea=(tarea) key(tarea.id)/>
				)
			)
		}
		</div>
		);
}
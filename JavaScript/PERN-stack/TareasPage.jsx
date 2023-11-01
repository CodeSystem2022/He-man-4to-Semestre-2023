import {useEffect } from "react";
import { CardTareas } from "../component/tareas/cardTareas";
import { useTareas, cargarTareas } from "../context/TareasContext";

function TareasPage(){
	const {tareas, cargarTareas}= useTareas();
	console.log(tareas);

	useEffect(() => {
		cargarTareas();
	}, []);

	return (
		<div classNone = "grid grid-cols-3 gap.2">{
			tareas.map((tarea)=> (
				<CardTareas tarea=(tarea) key(tarea.id)/>
				)
			)
		}
		</div>
		);
}
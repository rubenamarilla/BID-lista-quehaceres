import React from 'react';
import FilaTareas from './FilaTareas';

const Tareas = ({tasks, marcarTarea, completado = true, eliminarTarea}) => {

	const tarea = (doneValue) => {
		return (
			tasks
			.filter(tarea => tarea.hecho === doneValue)
			.map(tarea => (
				<FilaTareas key={ tarea.nombre } tarea={tarea} marcarTarea={marcarTarea} eliminarTarea={eliminarTarea}/>
        	))
		)
	}

    return (
        <>
			{tarea(completado)}
		</>
	)
}

export default Tareas;
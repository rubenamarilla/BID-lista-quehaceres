import React, { useState } from 'react'

//creador de tareas
const ListaDeTareas = (props) => {
	const [tarea, setTarea] = useState("");
	
  const handleSubmit = (e) => {
		e.preventDefault();
    props.crearTarea(tarea);
		setTarea("");
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={tarea} placeholder='Agrega una tarea' onChange={(e) => setTarea(e.target.value)} />
				<button type="submit">Agregar</button>
			</form>
		</>
	)
}
export default ListaDeTareas;
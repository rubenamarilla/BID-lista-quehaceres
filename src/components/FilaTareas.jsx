import React from 'react'

const FilaTareas = ({tarea, marcarTarea, eliminarTarea}) => {

  const eliminar = () => {
    if (window.confirm("Estás seguro de eliminar esta tarea?")) {
        eliminarTarea()
    }
    return
  }
    
  return (
        <div>
            <input type="checkbox" name="tachar" checked={tarea.hecho} onChange={() => marcarTarea(tarea)} />
            <span style={{ textDecoration: tarea.hecho && 'line-through' }}>{ tarea.nombre }</span>
            <button onClick={eliminar} >Eliminar</button>
        </div>
    )
}

export default FilaTareas
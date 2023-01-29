import React, { useState, useEffect } from "react";
import "./App.css";
import ListaDeTareas from "./components/ListaDeTareas";
import Tareas from "./components/Tareas";

function App() {
  const [listarTarea, setListarTarea] = useState([
    {
      nombre: "Esta es una tarea de ejemplo", hecho: false
    }
  ]);

  const crearTarea = (nombreTarea) => {
    if (!listarTarea.find((tarea) => tarea.nombre === nombreTarea)) {
      setListarTarea([...listarTarea, { nombre: nombreTarea, hecho: false }]);
    } //para que no se repitan las tareas
  };

  const marcarTarea = tarea => {
    setListarTarea(listarTarea.map(t => (t.nombre === tarea.nombre) ? {...t, hecho: !t.hecho} : t))
  }

  const eliminarTarea = () => {
    setListarTarea(listarTarea.filter(tarea => !tarea.hecho));
  }

  useEffect(()=> {
    let data = localStorage.getItem("tarea");
    if (data) {
      setListarTarea(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tarea", JSON.stringify(listarTarea))
  }, [listarTarea])

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <ListaDeTareas crearTarea={ crearTarea } />
      <p>Completa una tarea para poder eliminarla</p>
      <Tareas tasks={listarTarea} marcarTarea={marcarTarea} completado={false} eliminarTarea={eliminarTarea}/>  
      <h3>Tareas completadas</h3> 
      <Tareas tasks={listarTarea} marcarTarea={marcarTarea} eliminarTarea={eliminarTarea}/>
    </div>
  );
}

export default App;

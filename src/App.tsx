import { useState } from 'react'
import './App.css'
import FormularioTarea from './components/FormularioTarea'

function App() {
  const [tareas, setTareas] = useState<string[]>([])

  function agregarTarea(titulo: string) {
    setTareas((tareasActuales) => [...tareasActuales, titulo])
  }

  return (
    <main>
      <h1>Task Manager Palacios</h1>

      <FormularioTarea onAgregar={agregarTarea} />

      <ul aria-label="Lista de tareas">
        {tareas.map((tarea, index) => (
          <li key={`${tarea}-${index}`}>{tarea}</li>
        ))}
      </ul>
    </main>
  )
}

export default App

import Formulario from './components/Formulario'
import './App.css'

function App() {

  return (
    <div className='contenedor'>
      <h1 className='titulo'>Formulario</h1>
      <p>La informacion que se envie se podra ver como un objeto en la consola</p>
      <Formulario />
    </div>
  )
}

export default App

import './App.css';
import LogoTarea from './images/tarea.png';

/* Import componentes */

// import { Tarea } from './components/Tarea/Tarea';
import { ListaDeTareas } from './components/ListaDeTareas/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-logo'>
        <img 
          className='logo'
          src={LogoTarea}
          alt='Logo Tareas'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1> Mis Tareas</h1>
        <ListaDeTareas></ListaDeTareas>
        {/* <Tarea texto='Aprender React'></Tarea> */}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {Titulo} from './components/Titulo';
// import { Tarea } from './components/Tarea';
import { ListaTareas } from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <Titulo/>

      <div className='tareas-lista'>
        <h1>Mis Tareas</h1>
      {/* <Tarea texto = 'Aprender React' /> */}
      <ListaTareas/>
      </div>
    </div>
  );
}

export default App;

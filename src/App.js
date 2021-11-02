
import "./App.css";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import FormTareas from "./components/FormTareas";
import ListaTareas from "./components/ListaTareas";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
    <Titulo></Titulo>
    <Subtitulo comision = '16i' estado = {true} />
    <FormTareas></FormTareas>
   </>
  );
}

export default App;

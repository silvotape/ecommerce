
import './App.css';
import Form from './Form/form';
import Navbar from './Nabvar/Navbar';
import Itemlistcontainer from './ItemListContainer/itemlistcontainer';

function App() {
  return (
    <>
    <Navbar/>
    <Form busqueda={"Buscar categorias"}/>
    <Itemlistcontainer greeting={"Hola, buenas tardes"}/>
    </>
  );
}

export default App;

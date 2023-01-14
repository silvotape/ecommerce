
//IMPORTO ESTOS 3 ELEMENTOS DE REACT-ROUTER-DOM PARA GENERAR LAS RUTAS ENTRE LOS COMPONENTES DE MI APP
//HAY QUE CORTAR LA TERMINAL PARA INSTALAR ROUTER-DOM
//CHEQUEAR LA VERSION Q SEA 6.4.4 O MAYOR EN EL PACKAGE.JSON

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


//COMPONENTES
import Navbar from './Nabvar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

const App = () => {
  
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
      
  );
}

export default App;

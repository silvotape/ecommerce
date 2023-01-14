import CartWidget from "../CartWidget/CartWidget";
import Categorias from "../Categorias/Categorias";



const Navbar = () => {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid justify-content-between">
  <img className="logo" src="./img/mandala_logo3.jpeg" alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <Categorias />
            
           
            <CartWidget/>
           
          </div>
        </div>
      </nav> 
     
    );
}

export default Navbar;

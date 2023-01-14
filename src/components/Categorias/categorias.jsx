import { Link } from "react-router-dom";


const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <button className='btn'><Link className="nav-link menu" to={"/"}>Home</Link></button>
              </li>
        
              <li className="nav-item">
              <button className='btn'><Link className="nav-link menu" to={"/category/1"}>Mujer</Link></button>
              </li>
              <li className="nav-item">
              <button className='btn'><Link className="nav-link menu" to={"/category/2"}>Hombre</Link></button>
              </li>
              <li className="nav-item">
              <button className='btn'><Link className="nav-link menu" to={"/category/3"}>Niño</Link></button>
              </li>    
            </ul>
          
    );
}

export default Categorias;

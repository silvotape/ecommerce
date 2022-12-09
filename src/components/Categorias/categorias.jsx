import { Link } from "react-router-dom";


const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <button className='btn btn-dark'><Link className="nav-link" to={"/"}>Home<i className="fas fa-laptop fa-lg"></i></Link></button>
              </li>
        
              <li className="nav-item">
              <button className='btn btn-dark'><Link className="nav-link" to={"/category/1"}>Mujer<i className="fas fa-laptop fa-lg"></i></Link></button>
              </li>
              <li className="nav-item">
              <button className='btn btn-dark'><Link className="nav-link" to={"/category/2"}>Hombre<i className="fas fa-laptop fa-lg"></i></Link></button>
              </li>
              <li className="nav-item">
              <button className='btn btn-dark'><Link className="nav-link" to={"/category/3"}>Niño<i className="fas fa-laptop fa-lg"></i></Link></button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hogar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ofertas</a>
              </li>
              
            </ul>
    );
}

export default Categorias;

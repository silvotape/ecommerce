//CARD PRODUCTOS
// MODIFICO EN OBJETO PRODUCTO

import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <>
           <div className="card cardProducto">
            <img src= {`../img/${producto.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
                 <p className="card-text">*{producto.marca}*</p>
                 <p className="card-text">${producto.precio}</p>
                 <button className="btn btn-dark"> <Link to = {`/product/${producto.id}`}>Ver producto </Link></button>
                 
            </div>
            </div>

        </>
    );
}

export default Item;

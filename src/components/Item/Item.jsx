//CARD PRODUCTOS
// MODIFICO EN OBJETO PRODUCTO

import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <>
           <div className="card cardProducto text-center">
            <img src= {producto.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
                 <p className="card-text">*{producto.marca}*</p>
                 <p className="card-text">${producto.precio}</p>
                 <button className="button-56 w-100"> <Link className="link" to = {`/product/${producto.id}`}>Ver producto </Link></button>
                 
            </div>
            </div>

        </>
    );
}

export default Item;

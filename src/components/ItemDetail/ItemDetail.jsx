import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CarritoContext";

const ItemDetail = ({item}) => {
    
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }   

    return (
        <div className="row g-0 ">
            <div className="col-md-4 imgBody"  >
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8" >
                <div className="card-body">
                    <h1 className="card-title">{item.nombre}</h1>
                    <p className="card-text">Modelo: {item.modelo} </p>
                    <p className="card-text">Marca: {item.marca} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount inicial = {1} stock= {item.stock} onAdd={onAdd}/><br/>
                    <button><Link to="/cart" className="nav-link">Comprar</Link></button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;


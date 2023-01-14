import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getProducto} from "../assets/firebase"
//import consultarBDD from "../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        getProducto(id).then(producto => {
            setProducto(producto)
        })
        
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;
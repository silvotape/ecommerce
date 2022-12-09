// ME TRAIGO LOS ELEMENTOS DE LA BASE DE DATOS O DEL JSON
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import consultarBDD from "../assets/funciones.js"


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {category} = useParams()
    
    useEffect(() => {

        if (category){
            consultarBDD('../json/productos.json').then (products => {
                const productList = products.filter(prod=> prod.stock > 0).filter(prod => prod.idCategoria === parseInt (category))
                const cardProductos = ItemList({productList})
                setProductos(cardProductos)
            })

        } else {
            consultarBDD('./json/productos.json').then (products => {
                const productList = products.filter(prod=> prod.stock > 0)
                const cardProductos = ItemList({productList})
                setProductos(cardProductos)
            })
            }

    }, [category]);
    


    return (
        <>
           <p>{productos}</p> 
        </>
    );
}

export default ItemListContainer;
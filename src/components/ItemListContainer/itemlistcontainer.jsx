
// HOOKS DE REACT
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
// ME TRAIGO LOS ELEMENTOS DE LA BASE DE DATOS O DEL JSON
import { getProductos } from "../assets/firebase";
//import { getProducto, updateProducto} from "../assets/firebase";

//PARA CARGAR DESDE FIREBASE
//import { cargarBDD } from "../assets/firebase";
//PARA CONSULTAR ITEMS DESDE EL JSON
//import { consultarBDD } from '../assets/funciones.js';



//SI QUIERO CARGAR UN PRODUCTO POR SU ID, IMPORTO getProducto
//import { getProducto } from "../assets/firebase";


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {category} = useParams()

//PARA CARGAR DESDE EL JSON BACKUP
 /*    useEffect(() => {
        if(category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('./json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }

        cargarBDD().then(productos => console.log(productos))
        
    
},[category]); */
    
    useEffect(() => {


       if (category){
            getProductos().then (products => {
                const productList = products.filter(prod=> prod.stock > 0).filter(prod => prod.idCategoria === parseInt (category))
                const cardProductos = ItemList({productList})
                setProductos(cardProductos)
            })

        } else {
            getProductos().then (products => {
                const productList = products.filter(prod=> prod.stock > 0)
                const cardProductos = ItemList({productList})
                setProductos(cardProductos)
            })
            }
            

        

//cargarBDD().then (productos => console.log (productos))

// PRUEBA DE TRAERME UN PRODUCTO POR ID DESDE FIREBASE
//getProducto().then(productos => console.log (productos))

    }, [category]); 

       

    return (
        <>
           <p>{productos}</p> 
        </>
    );
}

export default ItemListContainer;
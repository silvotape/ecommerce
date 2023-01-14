//ARCHIVO CONEXION CONTRA LA BASE DE DATOS

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, collection} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey:process.env.API_KEY,
  authDomain: "mandala-db.firebaseapp.com",
  projectId: "mandala-db",
  storageBucket: "mandala-db.appspot.com",
  messagingSenderId: "528676141973",
  appId: "1:528676141973:web:e25709ced5ef91fd00549c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
  const promise = await fetch ('./json/productos.json')
  const productos = await promise.json()

  productos.forEach(async (prod) => {
    await addDoc(collection(db,"productos"), {
        nombre: prod.nombre,
        marca: prod.marca,
        modelo: prod.modelo,
        idCategoria: prod.idCategoria,
        stock: prod.stock,
        precio: prod.precio,
        img: prod.img

    })

    
  })
}

const getProductos = async () => {
  const productos = await getDocs (collection(db, "productos"))
  const items = productos.docs.map (prod => {
    return {...prod.data (), id: prod.id}
  })

  return items

}

const getProducto =  async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id: producto.id}
  return item
}
// 1 o 0
const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db,"productos", id), info)
  return estado
}

const deleteProducto = async(id) =>{
  const estado = await deleteDoc(doc(db, "productos", id))
  return estado
}

//CREATE Y READ ORDENES COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha ) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
      nombreCompleto: cliente.nombre,
      email: cliente.email,
      dni: cliente.dni,
      direccion: cliente.direccion,
      celular: cliente.celular,
      fecha: fecha,
      precioTotal: preTotal
  })

  return ordenCompra
}

const getOrdenCompra =  async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}

export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../assets/firebase';
import { useCarritoContext } from '../context/CarritoContext';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';


const Checkout = () => {
    const initialValues={nombre: "", email: "", email2: "", CI: "", cellphone: "", address: ""}
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);    
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
   //Realizo un chequeo del formulario para ver que no pueda realizar una compra sin producto no tiene stock.
   const checkCart = [...carrito]
   checkCart.forEach(prodCarrito => {
       getProducto(prodCarrito.id).then(prodBDD => {
           if(prodBDD.stock < prodCarrito.cant) {
               toast.error(`El producto ${prodBDD.nombre} no tiene stock, lo redirigimos a la pagina de inicio para que elija otro producto.`);                    
               emptyCart();
               navigate("/")                          
           }
       })            
   })

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            checkForm();
        }
      }, [formErrors]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        e.target.reset()
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    
//Aqui se validan para que se ingresen correctamente los diferentes elementos de los formularios, sin errores.
        
    const validate = (values)=>{
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;      //Errores de nombre y apellido (que no los ingrese)
        if (!values.nombre) {
            errors.nombre = "Por favor ingrese su nombre y apellido.";
        }
 
        if (!values.email) {
            errors.email = "Por favor ingrese su email.";
        } else if (!regex.test(values.email)) {
            errors.email = "Formato no valido para su email.";
        }
        if (!values.email2){
            errors.email2 = "Por favor ingrese su email.";            
        }else if (!regex.test(values.email2)) {
            errors.email2 = "Formato no valido para su email.";
        }else if (values.email2!==values.email){
            errors.email2 = "Los emails tiene que coincidir.";
        }
        if (!values.CI){
            errors.CI="Ingrese por favor su cedula.";
        }
    
        if (!values.cellphone){
            errors.cellphone="Ingrese por favor celular.";
        }
   
        if (!values.address){
            errors.address="Ingrese por favor su direccion.";
        }
        return errors;
    };
    const checkForm = (e) => {
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)                    
                } else {
                    toast.error(`El producto ${prodBDD.nombre} no tiene stock`);                    
                    emptyCart();
                    navigate("/")                      
                }
            })            
        })
        delete cliente["email2"];

        createOrdenCompra(cliente,totalPrice(), new Date().toISOString().slice(0,10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por compra en Mandala, su orden de Compra es ${item.id}`)
                emptyCart()              
                navigate("/")
            }).catch(error => {
                toast.error("Error en la generacion de su orden de comprar.")
                console.error(error)
            })                
        })
    }
    return (
        <div className="container ">
            <form onSubmit={handleSubmit} ref={datosFormulario}>
                <div className="col-sm-7">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre"  value={formValues.nombre} onChange={handleChange}/>
                    <p >{formErrors.nombre}</p>
                </div>
                <div className="col-sm-7">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={formValues.email} onChange={handleChange}/>
                    <p >{formErrors.email}</p>
                </div>
                <div className="col-sm-7">
                    <label htmlFor="emailcheck" className="form-label">Reingrese su Email</label>
                    <input type="text" className="form-control" name="email2" value={formValues.email2} onChange={handleChange}/>
                    <p >{formErrors.email2}</p>
                </div>
                <div className="col-sm-7">
                    <label htmlFor="CI" className="form-label">CI</label>
                    <input type="number" className="form-control" name="CI" value={formValues.CI} onChange={handleChange}/>
                    <p >{formErrors.CI}</p>
                </div>
                <div className="col-sm-7">
                    <label htmlFor="celular" className="form-label">Celular</label>
                    <input type="number" className="form-control" name="cellphone" value={formValues.cellphone} onChange={handleChange}/>
                    <p >{formErrors.cellphone}</p>
                </div>
                <div className="col-sm-7">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="address"  value={formValues.address} onChange={handleChange}/>
                    <p >{formErrors.direccion}</p>
                </div>
                <button type="submit" className="btn">Finalizar Compra</button>
            </form>
        </div>
    );
}


export default Checkout;


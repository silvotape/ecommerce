import {useState} from 'react';

//VOY SUMANDO O RESTANDO CANTIDAD DE ITEMS SEGUN EL STOCK DEL PRODUCTO, CUANDO HAGO "CLICK" EN EL BOTON DE
//SUMAR O RESTAR. USO USESTATE PARA GUARDAME SU ESTADO. COMIENZO CON 1 PORQUE NO PUEDO TENER 0 PRODUCTO

const ItemCount = ({stock,inicial,onAdd}) => {
    const [contador,setContador] = useState(inicial)
    
    const sumar = () => contador < stock && setContador(contador+1)
        

    const restar = () => contador > 1 && setContador (contador-1)

    const agregarAlCarrito = () => onAdd (contador)


    return (
        <div>
            <button className="btn btn-dark" onClick={() => restar()}>-</button>
            {contador}
            <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            <button className="btn cartWidget" onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
        </div>
    );
}

export default ItemCount;

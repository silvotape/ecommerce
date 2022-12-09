import {useState} from 'react';

const ItemCount = ({stock,initial,onAdd}) => {
    const [contador,setContador] = useState(1)
    
    const sumar = () => contador < stock && setContador(contador+1)
        

    const restar = () => contador > 1 && setContador (contador-1)

    return (
        <div>
            <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            <p>{contador}</p>
            <button className="btn btn-dark" onClick={() => restar()}>-</button>
            <button className="btn btn-light">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;

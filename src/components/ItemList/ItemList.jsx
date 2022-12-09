// HACE LOS CAMBIOS NECESARIOS EN EL ARRAY DE OBJETOS QUE ME TRAIGO DE
// LA BASE DE DATOS O DEL JSON
import Item from "../Item/Item";
const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <div className ="row cardProductos">
            {productList.map (product => <Item key={product.id} producto = {product}/>)}
        </div>
    );
}

export default ItemList;

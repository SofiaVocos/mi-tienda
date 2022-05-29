import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './styleItemCount.css'

const ItemCount = ({ item, stock, initial}) => {

    const [quantity, setQuantity] = useState(initial);
    const {carrito, addItem, isInCart } = useContext(GlobalContext);
    
    const product = item && {
        ...item,
        quantity,
    };

    const onAdd = () => {
        if (quantity > 0) {
            addItem (product);
        }
    }

    const handleRemoveItem = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1);
        } else {
            alert('ESTA ACCIÓN ES INCORRECTA')
        }
    };

    const handleAddItem = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            alert('DISCULPE, NO HAY MÁS STOCK')
        }
    };

    return (
        <>
            {!isInCart (carrito,item) ? (
                <div className='container-fluid d-flex flex-column align-items-center'>
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="add" onClick={handleRemoveItem}>−</button>
                        <p className='counter'>{quantity}</p>
                        <button type="button" className="add" onClick={handleAddItem}>+</button>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn2" onClick ={() => onAdd (product) }>AÑADIR AL CARRITO</button>
                    </div>
                </div>
            ) : (
                <>
                    <Link to="/Cart" className="btn btn2">IR AL CARRITO</Link>
                </>
            )}
            <div className="mt-5 text-center">
                <Link to={`/ItemListContainer`}>Volver a la tienda</Link>
            </div>
        </>
    )
}

export default ItemCount
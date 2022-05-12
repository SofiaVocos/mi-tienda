import React, { useState } from 'react'
import './styleItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    const restar = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        } else {
            alert('ESTA ACCIÓN ES INCORRECTA')
        }
    };

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            alert('DISCULPE, NO HAY MÁS STOCK')
        }
    };

    return (
        <>
            <div className='container-fluid d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-center'>
                    <button type="button" className="add" onClick={restar}>−</button>
                    <p className='counter'>{counter}</p>
                    <button type="button" className="add" onClick={sumar}>+</button>
                </div>

                
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn2" onClick ={() => onAdd (counter)}>AÑADIR AL CARRITO</button>
                    </div>
            </div>
        </>
    )
}

export default ItemCount
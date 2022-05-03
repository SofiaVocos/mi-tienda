import React, { useState } from 'react'

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

    const addCart = () => {
        onAdd(counter)
    }

    return (
        <>
            <div className='d-flex justify-content-center p-1'>
                <button type="button" className="btn btn-secondary" onClick={restar}>-</button>
                <p className='m-2'>{counter}</p>
                <button type="button" className="btn btn-secondary" onClick={sumar}>+</button>
            </div>
            <a href="/">
              <div className='d-flex justify-content-center'>
                <button type="button" className="btn btn-dark m-1 p-2" onClick={addCart}>Agregar al carrito</button>
              </div>
            </a>
        </>
    )
}

export default ItemCount
import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        } else {
            alert('ESTA ACCIÓN ES INCORRECTA')
        }
    };

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            alert('DISCULPE, NO HAY MÁS STOCK')
        }
    };

    const agregarCarrito = () => {
        onAdd(contador)
    }

    return (
        <>
            <div className='card border border-secondary w-25' style={{margin:"auto"}}>
                <div className='card-body'>
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn-secondary m-2 p-3" onClick={restar}>-</button>
                        <h1 className='m-2'>{contador}</h1>
                        <button type="button" className="btn btn-secondary m-2 p-3" onClick={sumar}>+</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn-dark m-1 p-3" onClick={agregarCarrito}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount
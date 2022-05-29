import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import Icons from '../Icons/Icons';
import { BsFillTrashFill } from "react-icons/bs";
import './styleCartItem.css'


const CartItem = (item) => {

  const {removeItem} = useContext(GlobalContext) 

  return (
    <>
      <div className='container' style={{ maxWidth: "540px" }}>
        <div className='row'>
          <div className='col-md-5'>
            <img src={item.pictureUrl} alt={item.title} />
          </div>
          <div className='col-md-7'>
            <h4>{item.title}</h4>
            <h5>Categoría: {item.category}</h5>
            <h5>Cantidad: {item.quantity}</h5>
            <h5>Precio: ${item.price}</h5>
            <br />
            
            <button className='remove d-flex' onClick ={() => removeItem (item.id)}>
              <Icons Icon={BsFillTrashFill} color={"black"} size={"25px"}/>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
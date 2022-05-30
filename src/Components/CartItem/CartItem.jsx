import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import Icons from '../Icons/Icons';
import { BsFillTrashFill } from "react-icons/bs";
import './styleCartItem.css'


const CartItem = ({item: {pictureUrl, title, category, quantity, price, id}}) => {

  const {removeItem} = useContext(GlobalContext) 

  return (
    <>
      <div className='container' style={{ maxWidth: "540px" }}>
        <div className='row'>
          <div className='col-md-5'>
            <img src={pictureUrl} alt={title} />
          </div>
          <div className='col-md-7'>
            <h4>{title}</h4>
            <h5>Categoría: {category}</h5>
            <h5>Cantidad: {quantity}</h5>
            <h5>Precio: ${price}</h5>
            <br />

            <h5>Sub-total: ${quantity*price}</h5>
            
            <button className='remove d-flex' onClick ={() => removeItem (id)}>
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
import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import Icons from '../Icons/Icons';
import { BsFillTrashFill, BsInfoCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './styleCart.css'

const Cart = () => {

  const { carrito, removeItem, clear } = useContext(GlobalContext) //useContext es el Hook para CONSUMIR la información y en los () va el NOMBRE DEL CONTEXT que queremos consumir.

  console.log (carrito)

  return (
    <>
      <div className='card card-1'>
        
        <h2 className='text-center pb-5'>Mi carrito</h2>

        <div>
          {carrito.length > 0 ? carrito.map ((item, index) => {
            return (
              <div key={index} className='cart'>
                <div className='row-1 container-fluid cartItem'>

                  <div className='col-lg-2 cartImg'>
                    <img src={item.pictureUrl}/>
                  </div>

                  <div className='cartTitle col-lg-4'>
                    <h4>{item.title}</h4>
                  </div>

                  <div className='cartPrice col-lg-4'>
                    <h4>${item.price}</h4>
                  </div>

                  <div className='cartRemove col-lg-1'>
                    <button className='remove' onClick ={() => removeItem (item.id)}>
                      <Icons Icon={BsFillTrashFill} color={"black"} size={"25px"}/>
                    </button>
                  </div>

                </div>

                <div className='d-flex justify-content-between align-items-center mt-5'>
                  <h3>Total: </h3>
                  <h2 className='total'>${item.price}</h2>
                </div>

                <button className='btn btn-block mt-5'>INICIAR COMPRA</button>
                <div className="mt-5 text-center">
                  <Link to={`/ItemListContainer`}>Seguir comprando</Link>
                </div>

                <div className='clear'>
                  <button onClick ={() => clear (carrito)} className='noselect'>
                    <span className="text">Vaciar carrito</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                  </button>
                </div>
              
              </div>
            )})

            : 
            
            (
              <>
                <div className='alert alert-info d-flex justify-content-center align-items-center' role="alert">
                  <div className='mr-2'><Icons Icon={BsInfoCircle} color={"#0c5460"} size={"19px"}/></div>
                  El carrito de compras está vacío
                </div>
                <div className="mt-5 text-center">
                  <Link to={`/ItemListContainer`}>Volver a la tienda</Link>
                </div>
              </>
            )
            
          }
        </div>
      </div>
      
    </>
  )
}

export default Cart
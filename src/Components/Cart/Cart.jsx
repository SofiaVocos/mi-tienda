import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import Icons from '../Icons/Icons';
import { FaHeart } from 'react-icons/fa';

const Cart = () => {

  const { carrito, removeItem, clear } = useContext(GlobalContext) //useContext es el Hook para CONSUMIR la información y en los () va el NOMBRE DEL CONTEXT que queremos consumir.

  return (
    <div className='Card'>
      <div className='Card'>
        {carrito.length> 0
          ?
          <div>
            <div className="product-added">

              <figure>
                <img loading="lazy" src={carrito.pictureUrl} title={carrito.title} />
              </figure>

              <div className="information-product-added">Se añadió al carrito {carrito.quantity} {carrito.title}.

                <span>Total a pagar: $/. {carrito.totalPrice}</span>

                <button className="buy">
                  <Icons Icon={FaHeart} color={"FCE373"} size={"20px"} />Comprar</button>

                <Icons Icon={FaHeart} color={"FCE373"} size={"20px"} onClick ={() => removeItem (carrito.id)} />
              
              </div>

            </div>

            <button id="buy-all"><Icons Icon={FaHeart} color={"FCE373"} size={"20px"}/> Comprar todo </button>
            <button id="clear-all" onClick ={() => clear ()}> Vaciar carrito </button>
          </div>

          :

          <h4 style={{ margin: 0 }}>Ningún producto ha sido añadido al carrito...&nbsp;<Icons Icon={FaHeart} color={"FCE373"} size={"20px"}/></h4>
        }

      </div>
    </div>
  )
}

export default Cart
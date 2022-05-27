import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import Icons from '../Icons/Icons';
import { BsFillTrashFill, BsInfoCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Formulario from '../Formulario/Formulario';
import './styleCart.css'


const Cart = () => {

  const {carrito, removeItem, total} = useContext(GlobalContext) //useContext es el Hook para CONSUMIR la información y en los () va el NOMBRE DEL CONTEXT que queremos consumir.

  return (
    <>
      <div className='card card-1'>
        
        <h2 className='text-center pb-5'>Mi carrito</h2>

        <div>
          {carrito.length > 0 ? carrito.map ((item, index) => {
            return (
              <>
                <div key={index} className='row'>
                
                  <div className='container-fluid col col-12 col-md-6 py-2 my-4'>

                    <div className='cartImg'>
                      <img src={item.pictureUrl} alt="imagen" />
                    </div>

                    <div className='cartTitle'>
                      <h4>{item.title}</h4>
                      <h5>Categría: {item.category}</h5>
                      <h5>Cantidad: {item.quantity}</h5>
                      <h5>Precio: ${item.price}</h5>
                      <br />
                      <button className='remove d-flex' onClick ={() => removeItem (item.id)}>
                        <Icons Icon={BsFillTrashFill} color={"black"} size={"25px"}/>
                        Eliminar
                      </button>
                    </div>
                  </div>

                  <div className="col col-12 col-md-6 py-2 my-4">
                    <Formulario total={total(carrito)} cart={carrito} />
                  </div>
                </div>

                {/* <div className='clear'>
                      <button onClick ={() => clear (carrito)} className='noselect'>
                          <span className="text">Vaciar carrito</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                      </button>
                    </div> */}
              </>
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
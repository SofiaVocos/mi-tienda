import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import Formulario from '../Formulario/Formulario';
import Icons from '../Icons/Icons';
import { BsInfoCircle } from "react-icons/bs";

const CartContainer = () => {

    const {carrito, clear, total} = useContext(GlobalContext)

  return (
    <>
        <div className='card card-1'>
            <div className='container-fluid'>

                <h2 className='text-center pb-5'>Mi carrito</h2>

                {carrito.length > 0 ? 
                    <>
                        <section>
                            {carrito.map((item,index) => <CartItem key={index} item={item}/> )}
                        </section>

                        <div className='col-md-6 col-sm12'>
                            <Formulario total={total(carrito)} compra={carrito}/>
                        </div>
                    </>
                    
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
                )}

                <div>
                    {carrito.length > 0 && (
                        <div className='clear'>
                        <button onClick ={() => clear (carrito)} className='noselect'>
                            <span className="text">Vaciar carrito</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                        </button>
                    </div>
                    )}
                </div>

            </div>
        </div>
        
    </>
)}

export default CartContainer
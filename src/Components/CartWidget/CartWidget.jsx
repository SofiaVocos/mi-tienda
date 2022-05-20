import React, { useContext } from 'react'
import Icons from '../Icons/Icons';
import {FaShoppingCart} from 'react-icons/fa';
import './styleCartWidget.css'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/CartContext';

const CartWidget = () => {

    const { carrito } = useContext(GlobalContext)

    return (
        <div>
            <Link to={`/Cart`} className='text-reset me-3'>
                <Icons Icon={FaShoppingCart} color={"FCE373"} size={"20px"}/>
            </Link>
            <span className="badge rounded-pill bg-danger">{carrito.length}</span>
        </div>
    )
}

export default CartWidget
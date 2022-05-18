import React from 'react'
import Icons from '../Icons/Icons';
import {FaShoppingCart} from 'react-icons/fa';
import './styleCartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = (cantProducts) => {

    cantProducts = 0;

    return (
        <div>
            <Link to={`/Cart`} className='text-reset me-3'>
                <Icons Icon={FaShoppingCart} color={"FCE373"} size={"20px"}/>
                <span className="badge rounded-pill bg-danger">{cantProducts}</span>
            </Link>
        </div>
    )
}

export default CartWidget
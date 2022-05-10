import React from 'react'
import Icons from '../Icons/Icons';
import {FaShoppingCart} from 'react-icons/fa';
import './styleCartWidget.css'

const CartWidget = (cantProducts, contar) => {

    cantProducts = 0;

    return (
        <div>
            <form className='text-reset me-3'>
                <Icons Icon={FaShoppingCart} color={"FCE373"} size={"20px"}/>
                <span className="badge rounded-pill bg-danger">{cantProducts}</span>
                {/* <p className='item-count'>{cantProducts}</p> */}
            </form>
        </div>
    )
}

export default CartWidget
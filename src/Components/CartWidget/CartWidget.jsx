import React from 'react'
import Icons from '../Icons/Icons';
import {FaShoppingCart} from 'react-icons/fa';

const CartWidget = (cantProducts, contar) => {

    cantProducts = 0;

    return (
        <div>
            <form className='d-flex'>
                <Icons Icon={FaShoppingCart} color={"black"} size={"25px"}/>
                <p className='item-count'>{cantProducts}</p>
            </form>
        </div>
    )
}

export default CartWidget
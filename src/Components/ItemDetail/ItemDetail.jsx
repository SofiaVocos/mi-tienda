import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productDetail }) => {

    return (
        <>
            <div className='d-flex'>
                <div>{productDetail.pictureUrl}</div>
                <div>
                    <div>{productDetail.title}</div>
                    <div>{productDetail.price}</div>
                    <ItemCount
                    stock={5}
                    initial={1}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
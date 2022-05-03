import React from 'react';
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({ products }) => { //products es un PARÁMETRO

  return (
    <>
      <div className='d-flex flex-wrap justify-content-around'>
        {products.length > 0 ? (
          products.map((product) => (
            <Item
              pictureUrl={product.pictureUrl}
              pictureAlt={product.pictureAlt}
              title={product.title}
              price={product.price} />
          ))
        ) : (
          <div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )}
      </div>
    </>
  );
};

export default ItemList
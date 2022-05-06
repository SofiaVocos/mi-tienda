import React from 'react';
import './itemList.css'
import Item from '../Item/Item';

const ItemList = ({ products }) => { //products es un PARÁMETRO

  return (
    <>
      <div className='d-flex flex-wrap justify-content-around'>
        {products.length > 0 ? (
          products.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              pictureUrl={item.pictureUrl}
              pictureAlt={item.pictureAlt}
              title={item.title}
              price={item.price}
              stock={item.stock}/>
          ))
        ) : (
          <div className="spinner">
            <svg viewBox="25 25 50 50" className="circular">
              <circle stroke-miterlimit="10" stroke-width="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemList
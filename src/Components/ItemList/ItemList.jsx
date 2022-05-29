import React from 'react';
import './styleItemList.css';
import Item from '../Item/Item';

const ItemList = ({ items }) => { //items es un PARÁMETRO

  return (
    <>
      <div className='d-flex flex-wrap justify-content-around'>
        {items ? (
          items.map((product) => (
            <Item
              key={product.id}
              item= {product}
            />
          ))
        ) : (
          <div className="spinner">
            <svg viewBox="25 25 50 50" className="circular">
              <circle strokeMiterlimit="10" strokeWidth="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemList
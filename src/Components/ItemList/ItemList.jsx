import React from 'react';
import './styleItemList.css';
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
              title={item.title}
              pictureUrl={item.pictureUrl}
              pictureAlt={item.pictureAlt}
              category={item.category}
              description={item.description}
              price={item.price}
              stock={item.stock}
              img1={item.img1}
              img2={item.img2}
              img3={item.img3}
              img4={item.img4}
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
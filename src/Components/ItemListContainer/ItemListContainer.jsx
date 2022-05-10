import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { data } from '../../Data/data';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState ([]); //Los useState se colocan arriba de todo

  useEffect(()=>{
    const promise = new Promise ((resolve,reject) => {
      
      setTimeout (() => {
        resolve (data)
      }, 2000);
    });

    promise
    .then ((res) => {
      setProducts (res) //Guardo la respuesta (res) devuelta en mi useState (Estado)
    })
    .then (() => console.log (products)) //Me aseguro por la consola que se haya guardado la respuesta (res). Hago que me imprima el valor de mi Estado
    .catch ((err) => console.log (err));

    console.log (products);

    return ()=> {
    }
  }, []);


  return (
    <>
      <ItemList products={products}/>
    </>
  );
}

export default ItemListContainer
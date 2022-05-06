import React, { useEffect, useState } from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';
import { data } from '../../Data/data';


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState ([]); //Los useState se colocan arriba de todo

  // const onAdd = (cantidad) => {
  //   console.log (`Seleccionaste ${cantidad}`)
  // }

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
      {/* <div className='container bg-secundary'>
        <h2>{greeting}</h2>
      </div> */}

      {/* <ItemCount
        stock={5}
        initial={1}
        onAdd={onAdd}
      /> */}

      <ItemList products={products}/> 
    </>
  );
}

export default ItemListContainer
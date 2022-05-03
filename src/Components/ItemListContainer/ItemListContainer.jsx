import React, { useEffect, useState } from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';
import futbol1 from '../../Assets/futbol1.jpeg';
import futbol2 from '../../Assets/futbol2.jpeg';
import futbol3 from '../../Assets/futbol3.jpeg';
import futbol4 from '../../Assets/futbol4.jpeg';
import futbol5 from '../../Assets/futbol5.jpeg';
import futbol6 from '../../Assets/futbol6.jpeg';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState ([]); //Los useState se colocan arriba de todo

  // const onAdd = (cantidad) => {
  //   console.log (`Seleccionaste ${cantidad}`)
  // }

  const data = [
    {
      id: 1,
      pictureUrl:`${futbol1}`,
      pictureAlt:'Cuadro Talleres',
      title:'Talleres',
      price:'$ 1.400',
    },

    {
      id:2,
      pictureUrl:`${futbol2}`,
      pictureAlt:'Cuadro Boca',
      title:'Boca',
      price:'$ 1.400',
    },

    {
      id: 3,
      pictureUrl:`${futbol3}`,
      pictureAlt:'Cuadro Belgrano',
      title:'Belgrano',
      price:'$ 1.400',
    },

    {
      id: 4,
      pictureUrl:`${futbol4}`,
      pictureAlt:'Cuadro Instituto',
      title:'Instituto',
      price:'$ 1.400',
    },

    {
      id: 5,
      pictureUrl: `${futbol5}`,
      pictureAlt:'Cuadro Messi-10',
      title:'Messi-10',
      price:'$ 1.600',
    },

    {
      id: 6,
      pictureUrl:`${futbol6}`,
      pictureAlt:'Cuadro Messi',
      title:'Messi',
      price:'$ 1.600',
    }
  ];

  useEffect(()=>{
    const promesa = new Promise ((resolve,reject) => {
      
      setTimeout (() => {
        resolve (data)
      }, 2000);
    });

    promesa
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
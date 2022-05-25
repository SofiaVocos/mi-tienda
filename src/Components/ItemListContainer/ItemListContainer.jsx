import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { data } from '../../Data/data';
import { useParams } from 'react-router-dom';
import db from '../../Service/Firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';
import { async } from '@firebase/util';

const ItemListContainer = () => {

  const [products, setProducts] = useState ([]); //Los useState se colocan arriba de todo

  const { CategoryId } = useParams()

  
  const getData = async () => {

    const col = collection (db, 'productos')

    const q = CategoryId ? query (col, where('category', '==', CategoryId)) : col

    try {
      const data = await getDocs (q)
      const result = data.docs.map (doc => doc = {id:doc.id, ...doc.data()})
      setProducts (result)
      console.log (result)
      
    } catch (error) {
      console.log (error)
    }
  }

  useEffect(() => {

    getData ()
    
  }, [CategoryId])
  

  // const { CategoryId } = useParams()

  
  // const getProducts = () => {
  //   const getProductsPromise = new Promise ((resolve,reject) => {
  //     setTimeout (() => {
        
  //       let filtCat = data

  //       if (CategoryId === 'mates'){
  //         filtCat=data.filter((mate => mate.category === 'MATES'))
  //       }

  //       if (CategoryId === 'bombillas'){
  //         filtCat=data.filter((mate => mate.category === 'BOMBILLAS'))
  //       }

  //       if (CategoryId === 'materas'){
  //         filtCat=data.filter((mate => mate.category === 'MATERAS'))
  //       }

  //       if (CategoryId === 'termos'){
  //         filtCat=data.filter((mate => mate.category === 'TERMOS'))
  //       }

  //       resolve (filtCat)
  //     }, 2000);
  //   });

  //   getProductsPromise
  //   .then ((res) => {
  //     setProducts (res) //Guardo la respuesta (res) devuelta en mi useState (Estado)
  //   })
  //   .then (() => console.log (products)) //Me aseguro por la consola que se haya guardado la respuesta (res). Hago que me imprima el valor de mi Estado
  //   .catch ((err) => console.log (err));

  //   console.log (products);

  //   return ()=> {
  //   }
  // };

  // useEffect(()=>{
    
  //   getProducts ()

  //   return ()=> {
  //   }
  // }, [CategoryId]);


  return (
    <>
      <ItemList products={products}/>
    </>
  );
}

export default ItemListContainer
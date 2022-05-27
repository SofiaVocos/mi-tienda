import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import db from '../../Service/Firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';


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
  
  return (
    <>
      <ItemList products={products}/>
    </>
  );
}

export default ItemListContainer
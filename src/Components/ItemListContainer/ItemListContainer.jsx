import React, { useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import db from '../../Service/Firebase';
import {query, where, getDocs, collection} from 'firebase/firestore';

const ItemListContainer = () => {

  const { CategoryId } = useParams();
  const [products, setProducts] = useState ([]);

  
  const fetchGetDataCollection = async () => {

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

    fetchGetDataCollection ();
    
  }, [CategoryId]);
  

  return (
    <>
      <ItemList items={products}/>
    </>
  );
}

export default ItemListContainer
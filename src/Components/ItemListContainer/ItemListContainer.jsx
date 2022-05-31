import React, { useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';
import db from '../../Service/Firebase';
import {query, where, getDocs, collection} from 'firebase/firestore';
import { GlobalContext } from '../../Context/CartContext';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const { CategoryId } = useParams();
  const [products, setProducts] = useState ([]);
  const {search} = useContext (GlobalContext);

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


  const resultSearch = products.filter((s) =>{
    if (s.title.toString().toLowerCase().includes(search.toLocaleLowerCase()) 
    || s.category.toString().toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return s;
    }
  });


  return (
    <>
      <ItemList items={resultSearch}/>
    </>
  );
}

export default ItemListContainer
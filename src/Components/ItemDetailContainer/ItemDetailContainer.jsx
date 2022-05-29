import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../Service/Firebase';
import {getDoc, doc} from 'firebase/firestore';
import './styleItemDetailContainer.css';

const ItemDetailContainer = () => {

    const { ItemId } = useParams();
    const [product, setProduct] = useState ({});

    const fetchGetItem = async () => {

        const item = doc (db, 'productos', ItemId)
    
        try {
          const prod = await getDoc (item)
          const result =  ({id:prod.id, ...prod.data()})
          setProduct (result)
          console.log (result)
          
        } catch (error) {
          console.log (error)
        }
    }

    useEffect(() => {
    
        fetchGetItem ();
        
    }, [ItemId]);
    
    return (
        <>
            {product ? (
                <ItemDetail item={product}/>) 
                : (
                    <div className="spinner">
                        <svg viewBox="25 25 50 50" className="circular">
                            <circle strokeMiterlimit="10" strokeWidth="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
                        </svg>
                    </div>
                )
            }
        </>
        
    );
}

export default ItemDetailContainer
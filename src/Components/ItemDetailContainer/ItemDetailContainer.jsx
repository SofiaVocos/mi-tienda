import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styleItemDetailContainer.css';
import db from '../../Service/Firebase';
import {getDoc, doc} from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState(null)

    const { ItemId } = useParams()

    const getItem = async () => {

        const item = doc (db, 'productos', ItemId)
    
        try {
          const prod = await getDoc (item)
          const result =  ({id:prod.id, ...prod.data()})
          setProductDetail (result)
          console.log (result)
          
        } catch (error) {
          console.log (error)
        }
    }
    
    useEffect(() => {
    
        getItem ()
        
    }, [ItemId])
    
    return (
        <>
            {productDetail ? (
                <ItemDetail productDetail={productDetail}/>) 
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
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../Data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styleItemDetailContainer.css';
import db from '../../Service/Firebase';
import {getDoc, doc} from 'firebase/firestore';
import { async } from '@firebase/util';

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

    // const filtId = data.find((item) => item.id === Number (ItemId))

    // const getItem = () => {
    //     const getItemPromise = new Promise((resolve, reject) => {
    //         setTimeout (() => {
    //             resolve(filtId)
    //         }, 2000);
    //     });

    //     getItemPromise
    //     .then((res) => {
    //         setProductDetail(res) //Guardo la respuesta (res) devuelta en mi useState (Estado)
    //     })
    //     .then(() => console.log(productDetail)) //Me aseguro por la consola que se haya guardado la respuesta (res). Hago que me imprima el valor de mi Estado
    //     .catch((err) => console.log(err));

    //     console.log(productDetail);

    //     return ()=> {
    //     }
    // };

    // useEffect(() => {

    //     getItem ()
    
    //   return () => {
    //   }
    // }, []);
    

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
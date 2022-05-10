import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../Data/data';
import ItemList from '../ItemList/ItemList';

const ItemCat = () => {

    const [category, setCategory] = useState(null)
    const { CategoryId } = useParams()

    const filtCat = data.filter((item) => item.category === (CategoryId))

    const getCategory = () => {
        const getCategoryPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtCat)
            }, 1000);
        });

        getCategoryPromise
            .then((res) => {
                setCategory(res) //Guardo la respuesta (res) devuelta en mi useState (Estado)
            })
            .then(() => console.log(category)) //Me aseguro por la consola que se haya guardado la respuesta (res). Hago que me imprima el valor de mi Estado
            .catch((err) => console.log(err));

        console.log(category);

        return () => {
        }
    };

    useEffect(() => {

        getCategory()

        return () => {
        }
    }, []);


    return (
        <>
            {category ? (
                <ItemList category={products} />)
                : (
                    <div className="spinner">
                        <svg viewBox="25 25 50 50" className="circular">
                            <circle strokeMiterlimit="10" strokeWidth="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
                        </svg>
                    </div>
                )
            }
        </>
    )
}

export default ItemCat
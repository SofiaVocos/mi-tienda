import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './styleItemDetail.css';

const ItemDetail = ({ productDetail: {id, title, pictureUrl, pictureAlt, category, description, price, stock, img1, img2, img3, img4}}) => {

    const {carrito, addItem} = useContext (GlobalContext)

    const [quantityBuy, setQuantityBuy] = useState(false)
    
    const onAdd = (counter) => {
        setQuantityBuy(true)
        console.log (counter)
    }

    const [state, setState] = useState ({
        
    })

    useEffect(() => {
        setState ({id, title, pictureUrl, pictureAlt, category, description, price, stock, img1, img2, img3, img4})
    }, [title])
    
    console.log (carrito)

    return (
        <>
            <div className='detail'>
                <div className='row container-fluid'>
                    <div className='col-lg-8 col-md-12 carrusel'>
                        <div className='carrusel-left d-flex flex-column'>
                            <img src={img1} alt={pictureAlt}/>
                            <img src={img2} alt={pictureAlt}/>
                            <img src={img3} alt={pictureAlt}/>
                            <img src={img4} alt={pictureAlt}/>
                        </div>
                        <div className='carrusel-right'>
                            <img src={pictureUrl} alt={pictureAlt}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 information">
                        <h2 className='title'>{title}</h2>
                        <h3 className='price'>${price}</h3>
                        <p>{description}</p>
                        <p className='stock'>{stock} DISPONIBLES</p>
                        <div className='rating'>
                            <input type="radio" name="rating" value="5" id="5"/>
                            <label htmlFor='5'>☆</label>
                            <input type="radio" name="rating" value="4" id="4"/>
                            <label htmlFor='4'>☆</label>
                            <input type="radio" name="rating" value="3" id="3"/>
                            <label htmlFor='3'>☆</label>
                            <input type="radio" name="rating" value="2" id="2"/>
                            <label htmlFor='2'>☆</label>
                            <input type="radio" name="rating" value="1" id="1"/>
                            <label htmlFor='1'>☆</label>
                        </div>

                        {quantityBuy ? (
                            <>
                                <Link to="/Cart" className="btn btn2" onClick ={() => addItem (state)}>FINALIZAR COMPRA</Link>
                                <Link to="/ItemListContainer" className="btn btn2" onClick ={() => addItem (state)}>CONTINUAR COMPRA</Link>
                            </>
                        ) : (
                            <ItemCount
                                stock={stock}
                                initial={1}
                                onAdd={onAdd}
                            />
                        )}

                        <p className='category'>CATEGORÍA: {category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
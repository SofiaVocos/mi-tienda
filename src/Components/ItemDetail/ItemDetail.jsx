import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styleItemDetail.css';

const ItemDetail = ({ productDetail}) => {

    const [quantityBuy, setQuantityBuy] = useState(false)
    
    const onAdd = (counter) => {
        setQuantityBuy(true)
        console.log (counter)
    }

    return (
        <>
            <div className='detail'>
                <div className='row container-fluid'>
                    <div className='col-lg-8 col-md-12 carrusel'>
                        <div className='carrusel-left d-flex flex-column'>
                            <img src={productDetail.img1} alt={productDetail.pictureAlt}/>
                            <img src={productDetail.img2} alt={productDetail.pictureAlt}/>
                            <img src={productDetail.img3} alt={productDetail.pictureAlt}/>
                            <img src={productDetail.img4} alt={productDetail.pictureAlt}/>
                        </div>
                        <div className='carrusel-right'>
                            <img src={productDetail.pictureUrl} alt={productDetail.pictureAlt}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 information">
                        <h2 className='title'>{productDetail.title}</h2>
                        <h3 className='price'>{productDetail.price}</h3>
                        <p>{productDetail.description}</p>
                        <p className='stock'>{productDetail.stock} DISPONIBLES</p>
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
                            <Link to="/Cart" className="btn btn2">FINALIZAR COMPRA</Link>
                        ) : (
                            <ItemCount
                                stock={productDetail.stock}
                                initial={1}
                                onAdd={onAdd}
                            />
                        )}

                        <p className='category'>CATEGORÍA: {productDetail.category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
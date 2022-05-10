import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './styleItemDetail.css';

const ItemDetail = ({ productDetail }) => {

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
                            <label>☆</label>
                            <input type="radio" name="rating" value="4" id="4"/>
                            <label>☆</label>
                            <input type="radio" name="rating" value="3" id="3"/>
                            <label>☆</label>
                            <input type="radio" name="rating" value="2" id="2"/>
                            <label>☆</label>
                            <input type="radio" name="rating" value="1" id="1"/>
                            <label>☆</label>
                        </div>
                        <ItemCount
                            stock={productDetail.stock}
                            initial={1}
                        />
                        <p className='category'>CATEGORÍA: {productDetail.category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
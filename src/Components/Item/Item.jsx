import React from 'react';
import { Link } from 'react-router-dom';
import './styleItem.css';


const Item = ({item: {id, title, pictureUrl, category, description, price, stock, img1, img2, img3, img4},}) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
      <div className="card">
        <img className="card-img-top" src={pictureUrl} alt={title}/>
        <div className="card-body">
          <p className="category1">{category}</p>
          <p className="card-title">{title}</p>
          <h5 className="card-text font-bold">${price}</h5>
          <Link to={`/ItemDetailContainer/${id}`} className="btn">VER DETALLES</Link>
        </div>
      </div>
    </div>
  )
}

export default Item
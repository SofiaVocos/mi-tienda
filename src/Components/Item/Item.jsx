import React from 'react';
import Icons from '../Icons/Icons';
import {FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Item = ({id, pictureUrl, pictureAlt, title, price, stock}) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3">
      <div className="card m-2">
        <img className="card-img-top" src={pictureUrl} alt={pictureAlt}/>
          <div className="card-body text-center">
            <div className="star pb-2 d-flex justify-content-center align-items-center">
              <Icons Icon={FaStar} color={"yellow"} size={"20px"}/>
              <Icons Icon={FaStar} color={"yellow"} size={"20px"}/>
              <Icons Icon={FaStar} color={"yellow"} size={"20px"}/>
              <Icons Icon={FaStar} color={"yellow"} size={"20px"}/>
              <Icons Icon={FaStar} color={"yellow"} size={"20px"}/>
            </div>
            <h4 className="card-title">{title}</h4>
            <p className="card-text font-bold">{price}</p>
            <div className='d-flex justify-content-center'>
              <button type="button" className="btn btn-dark m-1 p-2">comprar</button>
              <Link to={`/ItemDetailContainer/${id}`} className="btn btn-secondary m-1 p-2">ver detalles</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Item
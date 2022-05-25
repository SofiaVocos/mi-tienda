import React from 'react';
import './styleNavBar.css';
import Icons from '../Icons/Icons';
import { FaSearch, FaUserAlt, FaHeart } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import mate from '../../Assets/mate.png';
import { Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header className='sticky-top'>

                <div className="text-center nav1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 mb-1">
                                <form className="d-flex input-group w-auto my-auto mb-3">
                                    <input type="search" className="form-control" placeholder="¿Qué estás buscando?" />
                                    <span className="input-group-text border-0 d-flex ml-1">
                                        <Icons Icon={FaSearch} color={"FCE373"} size={"20px"} />
                                    </span>
                                </form>
                            </div>

                            <div className="col-md-7 col-sm-12 d-flex justify-content-center justify-content-md-end align-items-center">
                                <div className="pr-5 pt-2">
                                    <Icons Icon={FaUserAlt} color={"FCE373"} size={"20px"} />
                                    <p>Mi cuenta</p>
                                </div>
                                <div className="pr-5 pt-2">
                                    <CartWidget />
                                    <p>Mi carrito</p>
                                </div>
                                <div className="pr-2 pt-2">
                                    <Icons Icon={FaHeart} color={"FCE373"} size={"20px"} />
                                    <p>Mis favs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark nav-custom nav2">
                    <div className="container-fluid">
                        <Link className="navbar-brand logo" to="/">
                            <img src={mate} alt="logotipo" loading='Mateico' />
                            <div>
                                <div>
                                    <h1 className='border'>mateico</h1>
                                    <h1 className='wave'>mateico</h1>
                                </div>
                                <p>ARG</p>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">INICIO</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbardrop"
                                        data-toggle="dropdown">PRODUCTOS</a>
                                    <div className="dropdown-menu">
                                        <Link to={`/ItemListContainer/MATES`} className="dropdown-item">MATES</Link>
                                        <Link to={`/ItemListContainer/BOMBILLAS`} className="dropdown-item">BOMBILLAS</Link>
                                        <Link to={`/ItemListContainer/MATERAS`} className="dropdown-item">MATERAS</Link>
                                        <Link to={`/ItemListContainer/TERMOS`} className="dropdown-item">TERMOS</Link>
                                        <Link to={`/ItemListContainer`} className="dropdown-item">VER TODOS</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Contact">CONTACTO</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar
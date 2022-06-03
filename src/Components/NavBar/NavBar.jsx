import React from 'react';
import './styleNavBar.css';
import Icons from '../Icons/Icons';
import { FaUserAlt, FaHeart } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import Search from '../Search/Search';
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
                                <Search/>
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
                                    <NavLink className="nav-link text-uppercase" to="/">inicio</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-uppercase" href="/" id="navbardrop"
                                        data-toggle="dropdown">productos</a>
                                    <div className="dropdown-menu">
                                        <Link to={`/ItemListContainer/mates`} className="dropdown-item text-uppercase">mates</Link>
                                        <Link to={`/ItemListContainer/bombillas`} className="dropdown-item text-uppercase">bombillas</Link>
                                        <Link to={`/ItemListContainer/materas`} className="dropdown-item text-uppercase">materas</Link>
                                        <Link to={`/ItemListContainer/termos`} className="dropdown-item text-uppercase">termos</Link>
                                        <Link to={`/ItemListContainer`} className="dropdown-item text-uppercase">ver todos</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to="/Contact">contacto</NavLink>
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
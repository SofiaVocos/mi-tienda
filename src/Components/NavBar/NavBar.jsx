import React from 'react';
import './NavBar.css'
import logo from '../../Assets/logo.png';
import Icons from '../Icons/Icons';
import { FaSearch } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <>
            <header className='sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse pb-2 justify-content-between" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">INICIO</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbardrop"
                                        data-toggle="dropdown">PRODUCTOS</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/">VER TODOS</a>
                                        <a className="dropdown-item" href="/">NATURALEZA</a>
                                        <a className="dropdown-item" href="/">MUNDI</a>
                                        <a className="dropdown-item" href="/">FRASES</a>
                                        <a className="dropdown-item" href="/">ABSTRACTOS Y GEOMÉTRICOS</a>
                                        <a className="dropdown-item" href="/">ANIMALES</a>
                                        <a className="dropdown-item" href="/">MÚSICA</a>
                                        <a className="dropdown-item" href="/">DEPORTE</a>
                                        <a className="dropdown-item" href="/">FOOD</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">CONTACTO</a>
                                </li>
                            </ul>
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="logotipo" loading="Encuadrarte" width="100px" height="55px" />
                            </a>
                            <div>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                    <button className="btn btn-outline-success" style={{ backgroundColor: "#231F20" }} type="submit">
                                        <Icons Icon={FaSearch} color={"FCE373"} size={"25px"} />
                                    </button>
                                    <CartWidget/>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">

        //             <a className="navbar-brand" href="/">
        //                 <img src={logo} alt="" width="30" height="24"/>
        //             </a>

        //         <a className="navbar-brand" href="/">INICIO</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         PRODUCTOS
        //                     </a>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                         <li><a className="dropdown-item" href="/">VER TODOS</a></li>
        //                         <li><a className="dropdown-item" href="/">PAISAJE Y NATURALEZA</a></li>
        //                         <li><a className="dropdown-item" href="/">CIUDADES Y MAPAS</a></li>
        //                         <li><a className="dropdown-item" href="/">FRASES Y TEXTOS</a></li>
        //                         <li><a className="dropdown-item" href="/">ABSTRACTOS Y GEOMETRICOS</a></li>
        //                         <li><a className="dropdown-item" href="/">ANIMALES</a></li>
        //                         <li><a className="dropdown-item" href="/">MUSICA Y DEPORTES</a></li>
        //                         <li><a className="dropdown-item" href="/">FOOD</a></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/">CONTACTO</a>
        //                 </li>
        //             </ul>
        //             <CartWidget/>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar
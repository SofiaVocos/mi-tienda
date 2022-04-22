import React from 'react'
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="24"/>
                    </a>
            
                <a className="navbar-brand" href="#">INICIO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">VER TODOS</a></li>
                                <li><a className="dropdown-item" href="#">PAISAJE Y NATURALEZA</a></li>
                                <li><a className="dropdown-item" href="#">CIUDADES Y MAPAS</a></li>
                                <li><a className="dropdown-item" href="#">FRASES Y TEXTOS</a></li>
                                <li><a className="dropdown-item" href="#">ABSTRACTOS Y GEOMETRICOS</a></li>
                                <li><a className="dropdown-item" href="#">ANIMALES</a></li>
                                <li><a className="dropdown-item" href="#">MUSICA Y DEPORTES</a></li>
                                <li><a className="dropdown-item" href="#">FOOD</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTO</a>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
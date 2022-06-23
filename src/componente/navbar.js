import React, { Component } from 'react'
import Logo from './img/LogoBlackHeader.png'
import './navbar.css'

export default class NavBar extends Component {

    render() {
        return(
            <div className="nav">
                <nav className='aoba'>
                    <ul>
                        <li>
                            <div>
                                <a href="#section-inicio" className='logo-header'>
                                    <img className='img-logo' src={Logo}></img>
                                    <span className='nome'>Escolariza</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div>
                                <a href="ainbaue">Cadastre sua escola</a>
                            </div>
                        </li>
                    </ul>
                </nav>                  
            </div>
        )
    }
}
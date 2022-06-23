import React, { Component } from 'react'
import Logo from './img/LogoBlackHeader.png'
import "./footer.css"

export default class Footer extends Component {

    render() {
        return(
            <div class="footer-container">
                <footer>
                    <div class="content-1">
                        <div class="logo-wrapper">
                            <img className='img-logo' src={Logo}></img>
                        </div>
                        <span>© 2022 Copyright</span>
                    </div>
                    <ul class="content-2">
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}
import React, { Component } from 'react'
import HomeBody from "../componente/homebody"
import NavBar from "../componente/navbar"
import Footer from "../componente/footer"
import "./Home.css"

export default class Home extends Component {

    render() {
        return(
            <div>
                <div id="section-inicio"></div>
                <div className='App'>
                    <NavBar></NavBar>
                </div>
                <div>
                    <HomeBody></HomeBody>
                </div>
                <div>
                    <Footer></Footer>    
                </div>             
            </div>
        )
    }
}
import React from 'react'
import logo from '../assets/images/logo.jpg';
const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo" >
                    <img src={logo} alt="todolist" styles="height:2px ; width:2px"></img>
                </div>
            </nav>
        </header>
    )
}

export default Header


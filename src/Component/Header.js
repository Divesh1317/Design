import React from 'react'
import Logo from "./Assert/Logo.png";
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt='#####' style={{height:'100px', width:'403px'}} />
        </div>
    )
}

export default Header

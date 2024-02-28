import React from 'react'
import './Footer.css'
import Facebook from "./Assert/Facebook.png";
import Internet from "./Assert/Internet.png";
import Phone from "./Assert/Phone.png";


function Footer() {
    return (
        <footer className='Footer'>
            <span>
                <img src={Phone} alt="phonelink" style={{ width: '1.5rem' }} />
                <a href="/">TollFree: 1800-200-1234 </a></span>
            <span>
                <img src={Facebook} alt="facebooklink" style={{ width: '1.5rem' }} />
                <a href="/">www.Facebook.com/Cripumps</a></span>
            <span>
                <img src={Internet} alt="weblink" style={{ width: '1.5rem' }} />
                <a href="/">www.crigroups.com</a></span>

        </footer>
    )
}

export default Footer

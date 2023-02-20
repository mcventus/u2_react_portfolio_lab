import { useState } from 'react'
import logo4 from './logo4.png';
import './nav.css'
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { TfiLayoutMenuSeparated } from 'react-icons/tfi'

const Nav = () =>{
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return(
        <div className="container">
           <nav>
            <img src={logo4} className="logo"></img>
                <button className='dropdown-btn' onClick={ handleShowNavbar }><TfiLayoutMenuSeparated/></button>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li><NavLink id="link" to="/">Home</NavLink></li>
                        <li><NavLink id="link" to="/about">About</NavLink></li>
                        <li><NavLink id="link" to="/contact">Contact</NavLink></li>
                        <li><NavLink id="link" to="/projects">Projects</NavLink></li>
                    </ul>
                </div>
               
           </nav>
           <div className="header-text">
                <p>Full Stack Software Engineer</p>
                <h1>Hi, I'm <span>Mcventus</span><br/>a Software Engineer</h1>
           </div>
        </div>
        )
}
export default Nav;
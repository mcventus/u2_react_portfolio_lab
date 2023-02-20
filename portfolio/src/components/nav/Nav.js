import logo4 from './logo4.png';
import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () =>{
    return(
        <div className="container">
           <nav>
            <img src={logo4} className="logo"></img>
                <ul>
                    <li><Link id="link" to="/">Home</Link></li>
                    <li><Link id="link" to="/about">About</Link></li>
                    <li><Link id="link" to="/contact">Contact</Link></li>
                    <li><Link id="link" to="/projects">Projects</Link></li>
                </ul>
           </nav>
           <div className="header-text">
                <p>Full Stack Software Engineer</p>
                <h1>Hi, I'm <span>Mcventus</span><br/>a Software Engineer</h1>
           </div>
        </div>
        )
}
export default Nav;
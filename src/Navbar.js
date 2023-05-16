import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY > 0){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll' , changeBackground);

    return (  
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="logo">
                <h1>PI Intern</h1>
            </div>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li>About</li>
                <li>Services</li>
                <li>Internship</li>
                <li>Team</li>
                <li>Features</li>
                <li>FAQ</li>
            </ul>
        </div>
    );
}

export default Navbar;
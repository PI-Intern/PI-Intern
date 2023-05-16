import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../resources/002.png";


const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg .bg-transparent">
        <NavLink className="navbar-brand" to="#">
          <img src={logo} alt='logo' />
        </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <NavLink className="nav-link" to ="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li li className="nav-item">
          <NavLink className="nav-link" to="/internship">Internship</NavLink>
            </li>
            <li className="nav-item">
          <NavLink className="nav-link" to="/team">Team</NavLink>
            </li>
            <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
          <NavLink className="nav-link" to="/faq">FAQ</NavLink>
            </li>
      </ul>
     
    </div>
</nav>
</>
)
}

export default Navbar;
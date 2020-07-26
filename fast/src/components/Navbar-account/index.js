import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css'

const NavbarAccount = () => {
return(
  <div>
      <nav>
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo center">Logo</NavLink>
    </div>
  </nav>
  </div>
)
}

export default NavbarAccount
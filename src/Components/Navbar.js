import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div>
        <img src='#' alt='logo'/>
        <Link to="/">Products</Link>
        <Link to="/About">About</Link>
        <Link to="/Contacts">Contact</Link>
        <Link to="/Cart">Cart</Link>
    </div>
  );
}

export default Navbar;

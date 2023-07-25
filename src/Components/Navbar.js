import React from 'react'
import { Link } from 'react-router-dom'


function Navbar () {
  return (
    <div className='flex flex-row font-medium space-x-3 h-fit bg-white '>
        <img src="/logo/logo.JPG" alt='logo' className='block w-fit h-12 sm:mx-0 sm:shrink-0'/>
        <Link to="/">Products</Link>
        <Link to="/About">About</Link>
        <Link to="/Contacts">Contact</Link>
        <Link to="/Cart">Cart</Link>
    </div>
  );
}

export default Navbar;

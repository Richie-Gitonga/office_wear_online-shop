import React from 'react'
import "./AdminNav.css"
import { Link } from 'react-router-dom'


const AdminNav = () => {
    return(
        <div className='page_container'>
            <div className='flex flex-row justify-evenly'>
                <img src='/logo/logo.jpg' alt="" className='w-24 h-24 rounded-full relative'/>
                <p className='text-4xl font-semibold m-auto relative px-4'>Office Wear</p>
            </div>
            <div className='flex flex-row jsutify-around gap-8 mx-8'>
                <div className='nav-container'>
                    <Link to='/'><img src='logo/home.png' alt='' className='w-10 h-10' />
                    <span><p>Home</p></span>
                    </Link>
                </div>
                <div className='nav-container'>
                    <Link to='/Orders'><img src='logo/bell.png' alt='' className='w-10 h-10' />
                    <span><p>Orders</p></span>
                    </Link>
                </div>
                <div className='nav_container'>
                    <Link to='/Products'><img src='logo/orders.png' alt='' className='w-10 h-10 rounded' />
                    <span><p>Products</p></span>
                    </Link>
                </div>
                <div className='nav_container'>
                    <Link to='/Users'><img src='logo/users.png' alt='' className='w-10 h-10 rounded' />
                    <span><p>Users</p></span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default AdminNav
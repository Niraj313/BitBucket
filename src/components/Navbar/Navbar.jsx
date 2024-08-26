import React from 'react'
import './Navbar.css'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>BitBucket</h1>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>        
            </select>
            <button>Sign up<img src={arrow_icon}/></button>
        </div>
    </div>
  )
}

export default Navbar
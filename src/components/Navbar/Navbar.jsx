import React, { useContext } from 'react'
import './Navbar.css'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { setCurrency } = useContext(CoinContext)
  
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      }
      case 'inr': {
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      }
    }
  }

  return (
    <div className='navbar'>
        <h1 className='logo'>BitBucket</h1>
        <ul>
            <Link to={'/'}> <li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
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
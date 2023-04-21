import React, { useRef, useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


export default function Navbar() {
  const [active, setActive] = useState(false)
  
  const handleClick = () => {
    setActive(!active)
  }

  const {
    cartQuantity
  } = useCart()

  return (
    <nav style={{height: (active ? '100vh' : 'auto')}}>
      <div className="navbar">
        <button className="hamburger" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/">
          <img src="/img/logo/nemosa_text_gray_orange.svg" alt="NEMOSA" />
        </Link>
        <Link to="/panier">
          <div className="cart">
            <img src="img/icons/shopping-cart.svg" alt="Panier" />
            <span className="cart-quantity">{cartQuantity}</span>
          </div>
        </Link>
      </div>
      <div className={'menu ' + (active ? 'active' : '')}>
        <ul>
          <li><HashLink to="/#about">À propos</HashLink></li>
          <li><HashLink to="/#portfolio">Réalisations</HashLink></li>
          <li><Link to="/boutique">Boutique</Link></li>
          <li><HashLink to="/#services">Services</HashLink></li>
          <li><HashLink to="/#contact">Contact</HashLink></li>
        </ul>
      </div>
    </nav>
  )
}

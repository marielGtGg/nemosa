import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


export default function Navbar() {
  const {
    cartQuantity
    } = useCart()

  return (
    <nav className="nav">
      <ul>
        <li><HashLink to="/#about">À propos</HashLink></li>
        <li><HashLink to="/#portfolio">Réalisations</HashLink></li>
        <li><Link to="/produits">Produits</Link></li>
        <li><HashLink to="/#services">Services</HashLink></li>
        <li><HashLink to="/#contact">Contact</HashLink></li>
      </ul>
      <div><Link to="/">NEMOSA</Link></div>
      <div><Link to="/panier">Panier<span className="cart-quantity">{cartQuantity}</span></Link></div>
    </nav>
  )
}

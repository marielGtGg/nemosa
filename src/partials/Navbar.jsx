import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const {
    cartQuantity,
    emptyCart
    } = useCart()

  return (
    <nav className="nav">
      <ul>
        <li>
            <Link to="/">Menu</Link>
        </li>
        <li>
            <Link to="/produits">Produits</Link>
        </li>
        <li>
            <Link to="/panier">Panier<span>{cartQuantity}</span></Link>
            <button onClick={() => emptyCart()}>Vider</button>
        </li>
      </ul>
    </nav>
  )
}

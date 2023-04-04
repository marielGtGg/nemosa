import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {

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
                    <Link to="/panier">Panier</Link>
                </li>
            </ul>
        </nav>
    )
}

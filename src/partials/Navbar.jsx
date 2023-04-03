import React from 'react'

export default function Navbar() {

    return (
        <nav className="nav">
            <a href="/" className="site-title">Nemosa</a>
            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="/produits">Produits</a>
                </li>
                <li>
                    <a href="/panier">Panier</a>
                </li>
            </ul>
        </nav>
    )
}

import React, { useEffect, useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


export default function Navbar({mainTop} = null) {
  const [active, setActive] = useState(false)
  
  const handleClick = () => {
    setActive(!active)
  }
  
  const {
    cartQuantity
  } = useCart()

  // const [show, setShow] = useState(false)
  
  // useEffect(() => {
  //   setShow(mainTop <= 100)
  // }, [mainTop])
  
  return (
    <>
    {/* <nav style={{height: (active ? '100vh' : 'auto'), top: (show ? 0 : '-3rem')}}> */}
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
            <div><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="cart-quantity"><span>{cartQuantity}</span></div>
          </div>
        </Link>
      </div>
      <div className={'menu ' + (active ? 'active' : '')}>
        <ul>
          <li onClick={handleClick}><HashLink to="/#about">À propos</HashLink></li>
          <li onClick={handleClick}><HashLink to="/#portfolio">Réalisations</HashLink></li>
          <li onClick={handleClick}><Link to="/boutique">Boutique</Link></li>
          <li onClick={handleClick}><HashLink to="/#services">Services</HashLink></li>
          <li onClick={handleClick}><HashLink to="/#contact">Contact</HashLink></li>
        </ul>
      </div>
    </nav>
    <div id="nav-clearfix"></div>
    </>
  )
}

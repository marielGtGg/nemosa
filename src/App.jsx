import { useState, useEffect } from 'react'
import Navbar from './partials/Navbar'
import Home from './pages/Home'
import ProductIndex from './pages/ProductIndex'
import Cart from './pages/Cart'
import Contact from './partials/Contact'
import Fetch from './services/Fetch'
import './css/styles.css'

function App() {
  let page

  switch (window.location.pathname) {
    case '/':
      page = <Home />
      break
    case '/produits':
      page = <ProductIndex />
      break
    case '/panier':
      page = <Cart />
      break
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {page}
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default App

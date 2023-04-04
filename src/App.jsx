import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './partials/Navbar'
import Home from './pages/Home'
import ProductIndex from './pages/ProductIndex'
import ProductSingle from './pages/ProductSingle'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Contact from './partials/Contact'
import Fetch from './services/Fetch'
import './css/styles.css'

function App() {
  // let page

  // switch (window.location.pathname) {
  //   case '/':
  //     page = <Home />
  //     break
  //   case '/produits':
  //     page = <ProductIndex />
  //     break
  //   case '/panier':
  //     page = <Cart />
  //     break
  // }



  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits">
            <Route index element={<ProductIndex />}/>
            <Route path=":id" element={<ProductSingle />}/>
          </Route>
          <Route path="/panier" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default App

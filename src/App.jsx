import { useState, useEffect } from 'react'
import Navbar from './partials/Navbar'
import Banner from './partials/Banner'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Fetch from './services/Fetch'
import './css/App.css'
import './css/styles.css'

function App() {
  let page
  let banner = false

  switch (window.location.pathname) {
    case '/':
      page = <Home />
      banner = true
      break
    case '/produits':
      page = <Product />
      break
    case '/panier':
      page = <Cart />
      break
  }

  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <p id="scrolltop">scrollTop : {scrollTop}</p>
      <Banner scrollTop={scrollTop}/>
      <Navbar />
      <div className="main-container">
        {page}
      </div>
    </>
  )
}

export default App

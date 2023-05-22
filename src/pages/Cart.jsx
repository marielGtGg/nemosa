import { useCart } from '../contexts/CartContext'
import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react'
import productFind from '../services/productFind'
import formatPrice from '../utilities/formatPrice'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import cartCheckout from '../services/cartCheckout'

export default function Cart() {
  
  const {
    emptyCart,
    cartItems
  } = useCart()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = () => {
    let productsPromises = []

    cartItems.forEach(item => {
      productsPromises.push(productFind(item.id))
    })

    Promise.all(productsPromises)
    .then(productsData => {
      setProducts(productsData)
    })
    .catch(error => {
      console.error('error : ' + error)
    })
    .finally(() => {
      setLoading(false)
    })
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])
  
  const handleCheckout = () => {
    cartCheckout(cartItems)
    .then(data => {
      location.href = data.checkout_url
    })
    .catch(error => {
      console.error('error : ' + error)
    })
  }

  return (
    <section id="cart">
      <h1>Panier</h1>
      <div className="wrapper">
        {cartItems.length === 0 ? (
            <div className="empty">
              <p>Votre panier est vide.</p>
              <p><i className="fa-solid fa-cart-shopping"></i></p>
              <button className="btn-outline"><Link to="/boutique">Boutique</Link></button>
            </div>
        ) : (loading ? <Loading/> :
            <>
              <div className="cart-item-list">
                  {cartItems.map(item => <CartItem key={item.id} item={item} product={products.find(product => product.id === item.id)} />)} 
              </div>
              <div className="total">
                <div>Total</div>
                <div>
                  {formatPrice(cartItems.reduce((accumulator, item) => accumulator + item.quantity * products.find(product => product.id === item.id).price/100, 0))}
                </div> 
              </div>
              <div className="actions">
                <button className="btn-light" onClick={() => emptyCart()}>Vider</button>
                <button className="btn-outline" onClick={handleCheckout}>Procéder au paiement</button>
              </div>
              <div className="back"><i className="fa-solid fa-arrow-left-long"></i><Link to="/boutique">Boutique</Link></div>
            </>
        )}
      </div>
    </section>
  )
}
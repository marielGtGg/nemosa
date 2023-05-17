import { useCart } from '../contexts/CartContext'
import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react'
import productFind from '../services/productFind'
import formatPrice from '../utilities/formatPrice'

export default function Cart() {
  
  const {
    cartQuantity,
    emptyCart,
    cartItems
  } = useCart()

  const [products, setProducts] = useState([])
  const [cartItemsWithProduct, setCartItemsWithProduct] = useState([])

  const fetchProducts = () => {
    let productsPromises = []

    cartItems.forEach(item => {
      productsPromises.push(productFind(item.id))
    })

    Promise.all(productsPromises)
    .then((productsData) => {
      const newCartItemsWithProduct = cartItems.map(item => {
        const newProduct = productsData.find(product => product.id === item.id)
        return {...item, product: newProduct}
      })

      setCartItemsWithProduct(newCartItemsWithProduct)
      setProducts(productsData)
    })
  }

  useEffect(() => {
    console.log(products)
    if (products.length === 0) {
      fetchProducts()
    } else {
      console.log('update')
      const newCartItemsWithProduct = cartItems.map(item => {
        const newProduct = products.find(product => product.id === item.id)
        return {...item, product: newProduct}
      })
      setCartItemsWithProduct(newCartItemsWithProduct)
    }
  }, cartItems)

  return (
    <section id="cart">
      <h1>Panier</h1>
      <div className="cart-item-list">
        {cartItemsWithProduct.map(cartItemWithProduct => {
          return <CartItem key={cartItemWithProduct.id} cartItemWithProduct={cartItemWithProduct} />
        })} 
      </div>
      <div>Total : 
        {formatPrice(cartItemsWithProduct.reduce((accumulator, item) => accumulator + item.quantity * item.product.price/100, 0))}
      </div>
      <button onClick={() => emptyCart()}>Vider<span className="cart-quantity">{cartQuantity}</span></button>
      <button className="btn-outline">Procéder au paiement</button>
    </section>
  )
}
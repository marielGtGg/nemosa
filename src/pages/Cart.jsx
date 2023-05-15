import { useCart } from '../contexts/CartContext'
import CartItem from '../components/CartItem'

export default function Cart() {
  const {
    cartQuantity,
    emptyCart,
    cartItems
  } = useCart()

  console.log(cartItems)

  return (
    <section id="cart">
      <h1>Panier</h1>
      <div className="cart-item-list">
        {cartItems.map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />
        })} 
      </div>
      <div>Total : 
        {cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)}
      </div>
      <button onClick={() => emptyCart()}>Vider<span className="cart-quantity">{cartQuantity}</span></button>
      <button className="btn-outline">Procéder au paiement</button>
    </section>
  )
}
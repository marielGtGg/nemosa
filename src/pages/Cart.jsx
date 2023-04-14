import { useCart } from '../contexts/CartContext'

export default function Cart() {
  const {
    cartQuantity,
    emptyCart
  } = useCart()

  return (
    <section>
      <h1>Panier<span className="cart-quantity">{cartQuantity}</span></h1>
      <button onClick={() => emptyCart()}>Vider</button>
    </section>
  )
}
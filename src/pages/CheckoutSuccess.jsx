import {useEffect} from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function CheckoutSuccess() {

  const {
    emptyCart
  } = useCart()

  useEffect(() => {
    emptyCart()
  }, [])

  return (
    <section id="checkout-success">
      <div className="wrapper">
        <p>Merci pour ta commande.</p>
        <p>On se met à l'ouvrage.</p>
        <p><i className="fa-solid fa-hammer"></i></p>
        <button className="btn-outline"><Link to="/">Accueil</Link></button>
      </div>
    </section>
  )
}

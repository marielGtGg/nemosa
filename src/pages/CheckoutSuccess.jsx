import { Link } from 'react-router-dom'

export default function CheckoutSuccess() {
  return (
    <section id="checkout-success">
      <p>Merci pour ta commande.</p>
      <p>On se met à l'ouvrage.</p>
      <p><i class="fa-solid fa-hammer"></i></p>
      <button className="btn-outline"><Link to="/">Accueil</Link></button>
    </section>
  )
}

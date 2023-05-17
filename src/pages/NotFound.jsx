import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section id="not-found">
      <p>Oups, on ne trouve pas ce que tu cherches.</p>
      <button className="btn-outline"><Link to="/">Accueil</Link></button>
    </section>
  )
}
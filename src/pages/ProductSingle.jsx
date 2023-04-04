import { useParams } from "react-router-dom"

export default function ProductSingle() {
  const { id } = useParams()

  return (
    <section id="product-single">
      <h1>Produit {id}</h1>
    </section>
  )   
}
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"

export default function ProductSingle() {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('http://localhost/nemosa-api/index.php?page=product.find&id=' + id)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then((data) => {
      setProduct(data)
    })
    .catch(error => {
      console.error('error : ' + error)
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) return 'Chargement...'
  
  if (error) return 'Erreur!'

  return (
    <section id="product-single">
      <h1>{product.name}</h1>
      <img src={'/img/products/' + product.img} alt={product.name} />
      <p>{product.description}</p>
    </section>
  )   
}
import React, {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductIndex() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('http://localhost/nemosa-api/index.php')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then((data) => {
      setProducts(data)
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
    <section id="product-index">
      <h1>Produits</h1>
      <div className="product-grid">
        {products.map(product => {
          return <ProductCard key={product.id} product={product} />
        })} 
      </div>
    </section>
  )   
}
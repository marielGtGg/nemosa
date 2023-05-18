import React, {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'

export default function ProductIndex() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost/nemosa-api/index.php?q=product.all')
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
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <section id="product-index">
      <h1>Boutique</h1>
      {loading ? <Loading /> :
        <div className="product-grid">
          {products.map(product => {
            return <ProductCard key={product.id} product={product} />
          })} 
        </div>
      }
    </section>
  )   
}
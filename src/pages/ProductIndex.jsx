import React, {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import productAll from '../services/productAll'

export default function ProductIndex() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    productAll()
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
      <div className="header">
        <div className="wrapper"><h1>Boutique</h1></div>
      </div>
      <div className="wrapper">
        {loading ? <Loading /> :
          <div className="product-grid">
            {products.map(product => {
              return <ProductCard key={product.id} product={product} />
            })} 
          </div>
        }
      </div>
    </section>
  )   
}
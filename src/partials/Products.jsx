import React, {useEffect, useState} from 'react'
import Price from '../components/Price'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('http://localhost/nemosa-api/')
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
    <>
      <h1>En vedette</h1>
      <div className="products">
        {products.map(product => {
          return (
            <div key={product.id} className="product">
              <a href={'/produits/' + product.url}>
                <div className="img">
                  <img src={'/img/products/' + product.img} alt={product.name} />
                </div>
              </a>
              <div className="product-detail">
                <a href={'/produits/' + product.url}>
                  <p className="hover-highlight">{product.name}</p>
                  <p className="price hover-highlight"><Price value={product.price} /></p>
                </a>
              </div>
            </div>
          )
        })} 
      </div>
    </>
  )
}

import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import formatPrice from '../utilities/formatPrice'

export default function ProductTeaser() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost/nemosa-api/index.php?q=product.teaser')
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
    <section id="product-teaser">
      <div className="products">

        <figure id="teaser1">
          <img src={products.teaser1.img} alt={products.teaser1.name} />
          <figcaption>
            {products.teaser1.name}
            <br />{formatPrice(products.teaser1.price, true)}
          </figcaption>
        </figure>

        <figure id="teaser2">
          <figcaption>
            {products.teaser2.name}
            <br />{formatPrice(products.teaser2.price, true)}
          </figcaption>
          <img src={products.teaser2.img} alt={products.teaser2.name} />
        </figure>

        <figure id="teaser3">
          <img src={products.teaser3.img} alt={products.teaser3.name} />
          <figcaption>
            {products.teaser3.name}
            <br />{formatPrice(products.teaser3.price, true)}
          </figcaption>
        </figure>

      </div>
      <Link to="/boutique"><h1>Boutique<i className="fa-solid fa-arrow-right-long"></i></h1></Link>
    </section>
  )
}

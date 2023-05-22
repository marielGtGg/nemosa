import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Loading from '../components/Loading'

export default function ProductTeaser() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

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
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <section id="product-teaser">
      <div className="wrapper">
        <h2>Objets en bois & projets sur mesure</h2>
        {loading ? <Loading /> : 

          <div className="products">
            <HashLink to={'/boutique#' + products.teaser1.id}>
              <figure id="teaser1">
                <img src={products.teaser1.img} alt={products.teaser1.name} />
                <figcaption>
                  {products.teaser1.name}
                </figcaption>
              </figure>
            </HashLink>
            <HashLink to={'/boutique#' + products.teaser2.id}>
              <figure id="teaser2">
                <figcaption>
                  {products.teaser2.name}
                </figcaption>
                <img src={products.teaser2.img} alt={products.teaser2.name} />
              </figure>
            </HashLink>
            <HashLink to={'/boutique#' + products.teaser3.id}>
              <figure id="teaser3">
                <img src={products.teaser3.img} alt={products.teaser3.name} />
                <figcaption>
                  {products.teaser3.name}
                </figcaption>
              </figure>
            </HashLink>
          </div>

        }
        <Link to="/boutique"><h1>Voir les produits<i className="fa-solid fa-arrow-right-long"></i></h1></Link>
      </div>
    </section>
  )
}

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
            <figure id="teaser1">
              <HashLink to={'/boutique#' + products.teaser1.id}>
                <img src={products.teaser1.img} alt={products.teaser1.name} />
                <figcaption>
                  {products.teaser1.name}
                </figcaption>
              </HashLink>
            </figure>
            <figure id="teaser2">
              <HashLink to={'/boutique#' + products.teaser2.id}>
                <figcaption>
                  {products.teaser2.name}
                </figcaption>
                <img src={products.teaser2.img} alt={products.teaser2.name} />
              </HashLink>
            </figure>
            <figure id="teaser3">
              <HashLink to={'/boutique#' + products.teaser3.id}>
                <img src={products.teaser3.img} alt={products.teaser3.name} />
                <figcaption>
                  {products.teaser3.name}
                </figcaption>
              </HashLink>
            </figure>
          </div>

        }
        <Link to="/boutique"><h1>Tous les produits<i className="fa-solid fa-arrow-right-long"></i></h1></Link>
      </div>
    </section>
  )
}

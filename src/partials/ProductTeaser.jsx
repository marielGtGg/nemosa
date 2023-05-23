import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Loading from '../components/Loading'
import SlidingHeader from '../components/SlidingHeader'
import productTeaser from '../services/productTeaser'

export default function ProductTeaser() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    productTeaser()
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
        {/* <SlidingHeader key="productTeaser" name="Objets en bois & projets sur mesure" toRight={true} /> */}
        <h1>Objets en bois & projets sur mesure</h1>
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
        <Link to="/boutique"><h2>Tous les produits<i className="fa-solid fa-arrow-right-long"></i></h2></Link>
      </div>
    </section>
  )
}

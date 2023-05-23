import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import productFind from '../services/productFind'

export default function ProductSingle() {
  const { id } = useParams()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    productFind(id)
    .then((data) => {
      setProduct(data)
    })
    .catch(error => {
      console.error('error : ' + error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <section id="product-single">
      <div className="wrapper">
        <h1>{product.name}</h1>
        {loading ? <Loading/> :
          <ProductCard key={product.id} product={product} noTitle={true} />
        }
        <div className="back"><i className="fa-solid fa-arrow-left-long"></i><Link to="/boutique">Boutique</Link></div>
      </div>
    </section>
  )   
}
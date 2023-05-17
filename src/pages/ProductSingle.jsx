import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import Loading from '../components/Loading'

export default function ProductSingle() {
  const { id } = useParams()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('http://localhost/nemosa-api/index.php?q=product.find&id=' + id)
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

  return (
    <section id="product-single">
      {loading ? <Loading/> :
        <>
          <h1>{product.name}</h1>
          <img src={product.img} alt={product.name} />
          <p>{product.description}</p>
        </>
      }
    </section>
  )   
}
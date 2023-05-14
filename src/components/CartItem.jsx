import React, {useEffect, useState} from 'react'

export default function CartItem({cartItem}) {

  const {id, quantity} = cartItem

  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost/nemosa-api/index.php?q=product.find&id=' + id)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then((data) => {
      setItem(data)
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
    <div>{item.name} {quantity}</div>
  )
}

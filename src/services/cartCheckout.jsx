import React from 'react'

export default function cartCheckout() {

  const body = {
    success_url: 'http://localhost:5173/merci',
    cancel_url: 'http://localhost:5173/panier'
  }

  return new Promise((resolve, reject) => {
    fetch('http://localhost/nemosa-api/index.php?q=cart.checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then((data) => {
      resolve(data)
    })
    .catch(error => {
      reject(error)
    })
  })

}

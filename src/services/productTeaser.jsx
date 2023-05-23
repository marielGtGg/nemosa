
export default function productTeaser() {

  return new Promise((resolve, reject) => {
    fetch('http://localhost/nemosa-api/index.php?q=product.teaser')
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
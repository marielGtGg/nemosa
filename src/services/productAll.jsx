
export default function productAll() {

  return new Promise((resolve, reject) => {
    fetch('http://localhost/nemosa-api/index.php?q=product.all')
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
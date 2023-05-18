
export default function productFind(id) {

  return new Promise((resolve, reject) => {
    fetch('http://localhost/nemosa-api/index.php?q=product.find&id=' + id)
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
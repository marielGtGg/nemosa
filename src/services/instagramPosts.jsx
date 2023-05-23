
export default function instagramPosts() {

  return new Promise((resolve, reject) => {
    fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=' + import.meta.env.VITE_INSTAGRAM_KEY)
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
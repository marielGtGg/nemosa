import React, {useEffect, useState} from 'react'
import ImageSlider from '../utilities/ImageSlider'

export default function Portfolio() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=' + import.meta.env.VITE_INSTAGRAM_KEY)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then((data) => {
      setPosts(data.data.slice(0, 10))
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
    <section id="portfolio">
      <div className="container">
        <h1>Réalisations</h1>
        <div className="slider">
          <ImageSlider slides={posts}/>
        </div>
      </div>
    </section>
  )
}

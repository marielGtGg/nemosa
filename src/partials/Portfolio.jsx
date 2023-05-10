import React, {useEffect, useState} from 'react'
import ImageSlider from '../utilities/ImageSlider'

export default function Portfolio() {
  const instagramKey = 'IGQVJWdC10NGE3eXlqMW9OUllsbkdUczVQaFFWbm1oNWJlNDI1Y3JXX2o5SkpwQzZARWG9mc1NwUnVfMDR5bzI3MlFTY0V6dVJaUUdtdmZAQM0RyeUJTRzlsZADR3a0tnYUFwQkhwQ0xEM1hGUUdOR0VqbgZDZD'
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=' + instagramKey)
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

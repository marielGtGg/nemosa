import {useEffect, useState} from 'react'
import ImageSlider from '../utilities/ImageSlider'
import Loading from '../components/Loading'

export default function Portfolio() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

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
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])
  
  return (
    <section id="portfolio">
      <div className="header">
        <h1>Dernières réalisations</h1>
        <div className="instagram-logo"><i className="fa-brands fa-instagram"></i></div>
      </div>
      <div className="container">
        {loading ? <Loading/> :

          <div className="slider">
            <ImageSlider slides={posts}/>
          </div>
        }
      </div>
    </section>
  )
}

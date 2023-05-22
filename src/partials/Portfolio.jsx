import {useEffect, useState} from 'react'
import ImageSlider from '../components/ImageSlider'
import Loading from '../components/Loading'
import SlidingHeader from '../components/SlidingHeader'

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
      <div className="wrapper">
        <SlidingHeader key="productTeaser" name="Dernières réalisations" toRight={false} />
        {loading ? <Loading/> :

          <div className="slider-container">
            <div className="instagram">
              <a href="https://www.instagram.com/atelier.nemosa/" target="_blank">@atelier.nemosa<i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className="slider">
              <ImageSlider slides={posts}/>
            </div>
          </div>

        }
      </div>
    </section>
  )
}

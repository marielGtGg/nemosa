import React, { useState } from 'react'
import SlidingHeader from '../components/SlidingHeader'

export default function About() {

  const [shown, setShown] = useState(false)

  const handleClick = () => {
    setShown(!shown)
  }

  return (
    <section id="about">
      <div className="wrapper">
        <img src="img/antoine.jpg" alt="Antoine Gauthier-Grégoire" />
        {/* <SlidingHeader name="Je suis ébéniste" toRight={false}/> */}
        <h1>Je suis ébéniste</h1>
        <div className="body">
          <p className="lead">Maniant la chainsaw et le rabot, je révèle la beauté de nos forêts.</p>
          <div className={'more ' + (shown ? '' : 'hidden')}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, dolore at similique delectus voluptates quisquam in facere architecto, qui temporibus soluta quaerat debitis quae, sapiente modi maxime aspernatur tempore repellat.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, dolore at similique delectus voluptates quisquam in facere architecto, qui temporibus soluta quaerat debitis quae, sapiente modi maxime aspernatur tempore repellat.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, dolore at similique delectus voluptates quisquam in facere architecto, qui temporibus soluta quaerat debitis quae, sapiente modi maxime aspernatur tempore repellat.</p>
          </div>
          <div className="action">
            <button className="btn-more" onClick={handleClick}>
              <span className={(shown ? '' : 'hidden')}><i className="fa-solid fa-minus"></i></span>
              <span className={(shown ? 'hidden' : '')}><i className="fa-solid fa-plus"></i></span>     
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

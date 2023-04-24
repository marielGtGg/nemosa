import React from 'react'

export default function About() {
  return (
    <section id="about">
      <img src="img/antoine.jpg" alt="Antoine Gauthier-Grégoire" />
      <h1>Je suis ébéniste</h1>
      <div className="body">
        <p className="lead">Maniant la chainsaw et le rabot, je révèle la beauté de nos forêts.</p>
        <div className="more">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, dolore at similique delectus voluptates quisquam in facere architecto, qui temporibus soluta quaerat debitis quae, sapiente modi maxime aspernatur tempore repellat.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, dolore at similique delectus voluptates quisquam in facere architecto, qui temporibus soluta quaerat debitis quae, sapiente modi maxime aspernatur tempore repellat.</p>
        </div>
        {/* <button><FontAwesomeIcon icon="fa-solid fa-plus" /></button> */}
      </div>
    </section>
  )
}

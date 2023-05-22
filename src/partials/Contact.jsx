import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <h1>Écris-moi</h1>
        <div className="contact">
          <div><a href="mailto:atelier@nemosa.ca"><i className="fa-solid fa-paper-plane"></i>atelier@nemosa.ca</a></div>
          <div className="separator">|</div>
          <div><a href="https://www.instagram.com/atelier.nemosa/" target="_blank">@atelier.nemosa<i className="fa-brands fa-instagram"></i></a></div>
        </div>
      </div>
    </section>
  )
}

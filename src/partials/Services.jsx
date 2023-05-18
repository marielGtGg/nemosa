import React, { useState } from 'react'
import services from '../data/services.json'
import Collapsible from '../components/Collapsible'

export default function Services() {

  return (
    <section id="services">
      <h1>Services</h1>
      <div className="services-list">
        {services.map((service, index) => <Collapsible key={index} data={service}/>)}
      </div>
    </section>
  )
}

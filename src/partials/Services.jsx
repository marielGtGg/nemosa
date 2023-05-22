import React, { useState } from 'react'
import services from '../data/services.json'
import Collapsible from '../components/Collapsible'
import SlidingHeader from '../components/SlidingHeader'

export default function Services() {

  return (
    <section id="services">
      <div className="wrapper">
        <SlidingHeader key="productTeaser" name="Services" toRight={true} />
        <div className="services-list">
          {services.map((service, index) => <Collapsible key={index} data={service}/>)}
        </div>
      </div>
    </section>
  )
}

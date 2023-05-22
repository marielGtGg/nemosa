import React, { useEffect, useRef, useState } from 'react'

export default function Banner() {

  const nem = useRef()
  const o = useRef()
  const sa = useRef()
  const nemosa = useRef()
  const subtitle = useRef()

  const sky = useRef()
  const sun = useRef()
  const mountainsBack = useRef()
  const mountainsFront = useRef()
  const trees = useRef()

  const handleScroll = () => {
    const scrollY = window.scrollY
    nem.current.style.transform = `translate(${scrollY * -.1}px, 0)`
    o.current.style.transform = `scale(${scrollY * .002 + 1})`
    sa.current.style.transform = `translate(${scrollY * .1}px, 0)`
    nemosa.current.style.transform = `translate(0, ${scrollY * .30}px)`
    subtitle.current.style.transform = `translate(0, ${scrollY * .35}px)`

    sky.current.style.transform = `translate(0, ${scrollY * .25}px)`
    sun.current.style.transform = `translate(0, ${scrollY * .2}px)`
    mountainsBack.current.style.transform = `translate(0, ${scrollY * .15}px)`
    mountainsFront.current.style.transform = `translate(0, ${scrollY * .1}px)`
    trees.current.style.transform = `translate(0, ${scrollY * .05}px)`
  }

  useEffect(() => {   
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section id="banner">
        <div className="top">
          <ul ref={nemosa}>
            <li ref={nem}><img src="img/logo/nem.svg" alt="" /></li>
            <li ref={o}><img src="img/logo/o.svg" alt="" /></li>
            <li ref={sa}><img src="img/logo/sa.svg" alt="" /></li>
          </ul>
          <div ref={subtitle} className="subtitle">Travail du bois</div>
        </div>
        <div className="bottom">
          <img ref={sky} src="img/banner/sky.png" alt="" />
          <img ref={sun} src="img/banner/sun.png" alt="" />
          <img ref={mountainsBack} src="img/banner/mountains-back.png" alt="" />
          <img ref={mountainsFront} src="img/banner/mountains-front.png" alt="" />
          <img ref={trees} src="img/banner/trees.png" alt="" />
          <img src="img/banner/banks.png" alt="" />
        </div>
      </section>
      {/* <div id="nav-clearfix"></div> */}
    </>
  )
}

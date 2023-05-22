import React, { useState } from 'react'

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative'
  }

  const slideStyles = {
    height: '100%',
    backgroundImage: 'url(' + slides[currentIndex].media_url + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '.5rem',
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '0',
    fontSize: '2rem',
    opacity: '50%'
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '0',
    fontSize: '2rem',
    opacity: '50%'
  }

  const dotContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '.5rem',
    margin: '-1rem auto 0',
    maxWidth: '90%',
    overflow: 'auto'
  }

  const dotStyles = {
    minWidth: '.9rem',
    height: '.25rem',
    borderRadius: '.25rem',
    opacity: '50%'
  }

  const previous = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const next = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goTo = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div style={sliderStyles}>
      <div className="controls" style={leftArrowStyles} onClick={previous}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="controls" style={rightArrowStyles} onClick={next}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div style={slideStyles}></div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="controls" onClick={() => goTo(slideIndex)} style={{...dotStyles, backgroundColor: slideIndex === currentIndex ? '#000' : '#FFF'}}></div>
        ))}
      </div>
    </div>
  )
}

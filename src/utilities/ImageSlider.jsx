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
    borderRadius: '1rem',
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '5%',
    fontSize: '4rem'
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '5%',
    fontSize: '4rem'
  }

  const dotContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '-2rem'
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
      <div style={leftArrowStyles} onClick={previous}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div style={rightArrowStyles} onClick={next}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div style={slideStyles}></div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goTo(slideIndex)} style={{color: slideIndex === currentIndex ? '#999' : 'inherit'}}>
            <i className="fa-solid fa-circle"></i>
          </div>
        ))}
      </div>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'

export default function SlidingHeader({name, toRight}) {

  const [isIntersecting, setIsIntersecting] = useState(false)

  const h1 = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {    
        setIsIntersecting(entry.isIntersecting)
    })

    if (h1.current) {
      observer.observe(h1.current)
    }

    return () => {
      if (h1.current) observer.unobserve(h1.current)
    }
  }, [])

  return (
    <h1 ref={h1} className={'sliding ' + (toRight ? 'right ' : 'left ') + (isIntersecting ? 'show' : '')}>{name}</h1>
  )
}

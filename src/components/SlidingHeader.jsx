import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "framer-motion"

export default function SlidingHeader({name, toRight}) {
  console.log('sliding')
  // const [isIntersecting, setIsIntersecting] = useState(false)

  const h1 = useRef()
  const isInView = useInView(h1, { once: true });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {    
  //       setIsIntersecting(entry.isIntersecting)
  //   })

  //   if (h1.current) {
  //     observer.observe(h1.current)
  //   }

  //   return () => {
  //     if (h1.current) observer.unobserve(h1.current)
  //   }
  // }, [])

  return (
    <h1 ref={h1} className={'sliding ' + (toRight ? 'right ' : 'left ') + (isInView ? 'show' : '')}>{name}</h1>
  )
}

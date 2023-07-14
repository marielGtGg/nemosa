import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

export default function Banner() {
  console.log('banner')

  const banner = useRef()
  
  const { scrollYProgress } = useScroll({
    target: banner,
    offset: ['start start', 'end start']
  })

  return (
    <section ref={banner} id="banner">
      
      <div className="title">
        <motion.div 
          id="banner-nemosa"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0','70vw']) }}
        >

          <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], ['0', '-10vw']) }}>
            <img src="img/logo/nem.svg" alt="" />
          </motion.div>

          <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], ['1', '2.5']) }}>
            <img src="img/logo/o.svg" alt="" />
          </motion.div>

          <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], ['0', '10vw']) }}>
            <img src="img/logo/sa.svg" alt="" />
          </motion.div>

        </motion.div>   

        <motion.div 
          id="banner-subtitle" 
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0','75vw']) }}
        >
          Travail du bois
        </motion.div>
      </div>
 
      <div className="banner-landscape">

        <motion.div
          className="sky"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0','40vw']) }}
        >
          <img src="img/banner/sky.png" alt="" />
        </motion.div>

        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ['0','40vw']), 
            x: useTransform(scrollYProgress, [0, 1], ['0','5vw']),
            scale: useTransform(scrollYProgress, [0, 1], ['1', '.8'])
          }}
        >
          <img src="img/banner/sun.png" alt="" />
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0','30vw']) }}
        >
          <img src="img/banner/mountains-back.png" alt="" />
        </motion.div>

        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0','20vw']) }}
        >
          <img src="img/banner/mountains-front.png" alt="" />
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0','10vw']) }}
        >
          <img src="img/banner/trees.png" alt="" />
        </motion.div>

        <div>
          <img src="img/banner/banks.png" alt="" />
        </div>

      </div>
    </section>
  )
}

'use client'

import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import s from './index.module.scss'
import { motion } from 'framer-motion'

export default function ContentsHomeMasthead() {
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    accessibility: true,
    beforeChange: (current, next) => setActiveSlide(next),
  }

  const slideVariants = {
    initial: { opacity: 0, scale: 0, y: -1000 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0 },
  }

  return (
    <div className={s.masthead_carousel}>
      <Slider {...settings}>
        <div className={`overflow-hidden ${s.slick_item}`}>
          <motion.div
            initial="initial"
            animate={activeSlide === 0 ? 'animate' : 'initial'}
            variants={slideVariants}
            transition={{
              duration: 0.3,
              delay: 0.8,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
          >
            Hello World
            <img
              src="/assets/images/can-1.png"
              alt="slide 1"
              width="170"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </motion.div>
        </div>
        <div className={s.slick_item}>
          <motion.div
            initial="initial"
            animate={activeSlide === 1 ? 'animate' : 'initial'}
            variants={slideVariants}
            transition={{
              duration: 0.3,
              delay: 0.8,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
          >
            Hello World
          </motion.div>
        </div>
      </Slider>
    </div>
  )
}

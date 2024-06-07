'use client'

import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import s from './index.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

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
    fade: true,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  const slideVariants = {
    initial: { opacity: 0, scale: 0, y: -1000 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0 },
  }

  const textVariants = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: -30 },
    exit: { opacity: 0, x: 0 },
  }
  const text2Variants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: -30 },
    exit: { opacity: 0, y: 0 },
  }

  return (
    <AnimatePresence>
      <div className={s.masthead_carousel}>
        <Slider {...settings}>
          <div className={`${s.slick_item} ${s.slick_1}`}>
            <div className={s.main_content}>
              <motion.div
                initial="initial"
                animate={activeSlide === 0 ? 'animate' : 'initial'}
                variants={slideVariants}
                transition={{
                  duration: 0.3,
                  delay: 0.6,
                  ease: [0.68, -0.55, 0.27, 1.55],
                }}
                className={s.can_1}
              >
                <Image
                  width={566}
                  height={875}
                  alt="Grape"
                  src={'/assets/images/Home_Masthead-1_Grape.png'}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
              <motion.div
                initial="initial"
                animate={activeSlide === 0 ? 'animate' : 'initial'}
                variants={slideVariants}
                transition={{
                  duration: 0.3,
                  delay: 0.9,
                  ease: [0.68, -0.55, 0.27, 1.55],
                }}
                className={s.can_2}
              >
                <Image
                  width={566}
                  height={875}
                  alt="Lemon"
                  src={'/assets/images/Home_Masthead-1_Lemon.png'}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
              <motion.div
                initial="initial"
                animate={activeSlide === 0 ? 'animate' : 'initial'}
                variants={textVariants}
                transition={{ duration: 0.5, delay: 1.3, ease: 'easeOut' }}
                className={s.text_1}
              >
                <Image
                  src="/assets/images/Home_Masthead-1_NO1-premix_masthead.svg"
                  width={480}
                  height={350}
                  alt="No.1 Premix"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </motion.div>
            </div>
            <motion.div
              initial="initial"
              animate={activeSlide === 0 ? 'animate' : 'initial'}
              variants={text2Variants}
              transition={{ duration: 0.5, delay: 1.8, ease: 'easeOut' }}
              className={s.text_2}
            >
              <Image
                src="/assets/images/Home_Masthead-1_real-fruit-taste.svg"
                width={203}
                height={75}
                alt="Real Fruit Taste"
                style={{
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </div>
          <div className={`${s.slick_item} ${s.slick_2}`}>
            <div className={s.main_content}>
              <motion.div
                initial="initial"
                animate={activeSlide === 1 ? 'animate' : 'initial'}
                variants={slideVariants}
                transition={{
                  duration: 0.3,
                  delay: 0.6,
                  ease: [0.68, -0.55, 0.27, 1.55],
                }}
                className={s.can_1}
              >
                <Image
                  width={566}
                  height={875}
                  alt="Grape"
                  src={'/assets/images/Home_Masthead-2_Grapefruit.png'}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
              <motion.div
                initial="initial"
                animate={activeSlide === 1 ? 'animate' : 'initial'}
                variants={slideVariants}
                transition={{
                  duration: 0.3,
                  delay: 0.9,
                  ease: [0.68, -0.55, 0.27, 1.55],
                }}
                className={s.can_2}
              >
                <Image
                  width={566}
                  height={875}
                  alt="Shekwasha"
                  src={'/assets/images/Home_Masthead-2_Shekwasha.png'}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
              <motion.div
                initial="initial"
                animate={activeSlide === 1 ? 'animate' : 'initial'}
                variants={slideVariants}
                transition={{
                  duration: 0.3,
                  delay: 1.2,
                  ease: [0.68, -0.55, 0.27, 1.55],
                }}
                className={s.can_3}
              >
                <Image
                  width={566}
                  height={875}
                  alt="Lemon"
                  src={'/assets/images/Home_Masthead-2_Lemon.png'}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
              <motion.div
                initial="initial"
                animate={activeSlide === 1 ? 'animate' : 'initial'}
                variants={textVariants}
                transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}
                className={s.text_1}
              >
                <Image
                  src="/assets/images/9percent_masthead_right_align_1.svg"
                  width={537}
                  height={380}
                  alt="9% Alcohol"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </motion.div>
            </div>
            <motion.div
              initial="initial"
              animate={activeSlide === 1 ? 'animate' : 'initial'}
              variants={text2Variants}
              transition={{ duration: 0.5, delay: 2.0, ease: 'easeOut' }}
              className={s.text_2}
            >
              <Image
                src="/assets/images/Home_Masthead-1_real-fruit-taste.svg"
                width={203}
                height={75}
                alt="Real Fruit Taste"
                style={{
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </div>
        </Slider>
      </div>
    </AnimatePresence>
  )
}

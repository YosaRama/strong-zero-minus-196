'use client'

import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
import s from './index.module.scss'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'

import { useState, useEffect, useRef } from 'react'
import { motion, useTransform, useScroll, MotionValue } from 'framer-motion'

export default function ContentsHomeVideo() {
  const [playerHeight, setPlayerHeight] = useState(0)
  const [width, setWidth] = useState<MotionValue<string> | string>('100%')
  const videoPlayerRef = useRef<HTMLDivElement>(null) // Specify the type of ref
  const { scrollY } = useScroll()
  const [isPlaying, setIsPlaying] = useState(false)
  const halfPlayerHeight = playerHeight * 0.5
  const dynamicWidth = useTransform(
    scrollY,
    [halfPlayerHeight, playerHeight * 0.9],
    ['50%', '100%'],
  )

  useEffect(() => {
    const element = videoPlayerRef.current
    if (element) {
      const height = element.offsetHeight
      setPlayerHeight(height)
      setIsPlaying(true)
    }

    const updateWidth = () => {
      if (window.innerWidth <= 768) {
        setWidth('100%')
      } else {
        setWidth(dynamicWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [playerHeight, dynamicWidth])

  return (
    <section className={s.wrapper}>
      <motion.div ref={videoPlayerRef} style={{ width }}>
        <MediaPlayer
          playsInline
          title="Strong Zero"
          src="/assets/videos/M196-FCI.mp4"
          poster="/assets/images/video_thumbnail.jpg"
          muted
          autoPlay={isPlaying}
        >
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </motion.div>
    </section>
  )
}

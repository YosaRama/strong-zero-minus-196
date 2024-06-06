'use client'

import React from 'react'
import { motion } from 'framer-motion'
import s from './index.module.scss'

const mobileVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const mobileVariantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function MobileNavigation() {
  return (
    <nav className={`dropdown-mobile-nav ${s.mobile_nav}`}>
      <motion.ul variants={mobileVariants}>
        <motion.li variants={mobileVariantsItem}>
          <a href="/" className={s.active}>
            The Science
          </a>
        </motion.li>
        <motion.li variants={mobileVariantsItem}>
          <a href="/">Taste Minus 196</a>
        </motion.li>
        <motion.li variants={mobileVariantsItem}>
          <a href="/">Where to buy</a>
        </motion.li>
      </motion.ul>
    </nav>
  )
}

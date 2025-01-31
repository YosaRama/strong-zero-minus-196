'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
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

interface MobileNavigationProps {
  toggleOpen: () => void
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ toggleOpen }) => (
  <nav className={`dropdown-mobile-nav ${s.mobile_nav}`}>
    <motion.ul variants={mobileVariants}>
      <motion.li variants={mobileVariantsItem}>
        <Link href="/#the-science" onClick={toggleOpen}>
          The Science
        </Link>
      </motion.li>
      <motion.li variants={mobileVariantsItem}>
        <Link href="/taste-minus-196/" onClick={toggleOpen}>
          Taste Minus 196
        </Link>
      </motion.li>
      <motion.li variants={mobileVariantsItem}>
        <Link href="/taste-minus-196#where-to-buy" onClick={toggleOpen}>
          Where to buy
        </Link>
      </motion.li>
    </motion.ul>
  </nav>
)

export default MobileNavigation

import * as React from 'react'
import { motion } from 'framer-motion'
import s from './index.module.scss'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    {...props}
  />
)

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} className={s.button}>
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 100%)' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 100%)' },
        }}
      />
    </svg>
  </button>
)

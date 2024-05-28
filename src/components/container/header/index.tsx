'use client'

import * as React from 'react'
// import { useRef } from "react"
// import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import s from './index.module.scss'

import { motion, useCycle } from 'framer-motion'
import { MenuToggle } from '@/components/menu-toggle'

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    position: 'absolute',
    with: '100%',
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px calc(100% - 40px))',
    position: 'relative',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 40,
    },
  },
}

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile_nav_open')
    } else {
      document.body.classList.remove('mobile_nav_open')
    }
  }, [isOpen])

  return (
    <>
      <header className={s.container}>
        <div className={s.logo}>
          <a className={s.logo__link} href="/">
            <Image
              className={s.logo__img}
              src={'/assets/images/logo-black.png'}
              alt={'Strong Zero'}
              width={115}
              height={86}
            />
          </a>
        </div>
        <nav className={s.nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__list__item}>
              <a className={s.nav__list__item__link} href="/">
                The Science
              </a>
            </li>
            <li className={s.nav__list__item}>
              <a className={s.nav__list__item__link} href="/">
                Taste Minus 196
              </a>
            </li>
            <li className={s.nav__list__item}>
              <a className={s.nav__list__item__link} href="/">
                Where to buy
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={s.mobile_nav}
      >
        <motion.div className={s.mobile_nav_background} variants={sidebar} />
        <Image
          className="mobile_logo"
          src={'/assets/images/logo-white.png'}
          alt={'Strong Zero'}
          width={71}
          height={52}
        />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  )
}

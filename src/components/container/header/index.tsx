'use client'

import * as React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './index.module.scss'

import { motion, useCycle, Variants } from 'framer-motion'
import { MenuToggle } from '@/components/menu-toggle'
import MobileNavigation from '@/components/mobile-navigation'

const sidebar: Variants = {
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
          <Link href="/" className={s.logo__link}>
            <Image
              className={s.logo__img}
              src={'/assets/images/logo-black.png'}
              alt={'Strong Zero'}
              width={115}
              height={86}
            />
          </Link>
        </div>
        <nav className={s.nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__list__item}>
              <Link href="/#the-science" className={s.nav__list__item__link}>
                The Science
              </Link>
            </li>
            <li className={s.nav__list__item}>
              <Link
                href="/taste-minus-196/"
                className={s.nav__list__item__link}
              >
                Taste Minus 196
              </Link>
            </li>
            <li className={s.nav__list__item}>
              <Link
                href="/taste-minus-196#where-to-buy"
                className={s.nav__list__item__link}
              >
                Where to buy
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={`mobile_nav`}
      >
        <motion.div className={s.mobile_nav_background} variants={sidebar} />
        <Link href="/" className="mobile_logo" onClick={() => toggleOpen(0)}>
          <Image
            src={'/assets/images/logo-white.png'}
            alt={'Strong Zero'}
            width={71}
            height={52}
          />
        </Link>
        <MobileNavigation toggleOpen={toggleOpen} />
        <MenuToggle toggle={toggleOpen} />
      </motion.div>
    </>
  )
}

'use client'
// import AnimateText from '@/components/common/animate-text'
import s from './index.module.scss'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import Button from '@/components/button'

const lemonWrapVariants: Variants = {
  offscreen: {
    transition: { staggerChildren: 0.4, staggerDirection: -1 },
  },
  onscreen: {
    transition: { staggerChildren: 0.4, delayChildren: 0.2 },
  },
}

const lemonVariants: Variants = {
  offscreen: {
    y: 0,
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 500,
      damping: 20,
      delayChildren: 0.2,
    },
  },
}

export default function ContentsHomeLemonPop() {
  return (
    <>
      <section className={s.wrapper}>
        <div id="the-science" className={s.anchor_link} />
        <div className={s.container}>
          <motion.div
            className="flex flex-wrap"
            initial="offscreen"
            whileInView="onscreen"
            variants={lemonWrapVariants}
          >
            <motion.div
              className="w-full lg:w-1/3 mb-5 sm:mb-10 lg:mb-0"
              variants={lemonVariants}
            >
              <Image
                className={s.pop_image}
                src={'/assets/images/whole.png'}
                alt={'Whole'}
                width={600}
                height={600}
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-1/3 mb-5 sm:mb-10 lg:mb-0"
              variants={lemonVariants}
            >
              <Image
                className={s.pop_image}
                src={'/assets/images/freeze.png'}
                alt={'Freeze'}
                width={600}
                height={600}
              />
            </motion.div>
            <motion.div className="w-full lg:w-1/3" variants={lemonVariants}>
              <Image
                className={s.pop_image}
                src={'/assets/images/crush.png'}
                alt={'Crush'}
                width={600}
                height={600}
              />
            </motion.div>
          </motion.div>
          <div className={`mx-auto text-center ${s.content} pt-8 sm:pt-20`}>
            <p className={s.text}>
              Quench your thirst with MINUS 196, where vodka and soda meet bold
              fruit flavour. Our cutting-edge Freeze Crush Technology™ locks in
              a real fruit taste by freezing and crushing whole fruit, then
              infusing it in spirits for a refreshing experience.
            </p>
            <p className="mt-20">
              <Button text="DISCOVER MINUS 196" href="/taste-minus-196/" />
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

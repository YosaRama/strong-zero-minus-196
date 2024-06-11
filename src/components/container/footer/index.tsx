'use client'

import { useState } from 'react'
import s from './index.module.scss'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const wrapVariants: Variants = {
  hidden: {
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.02 },
  },
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
}

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <>
      <motion.footer
        className={s.wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={wrapVariants}
      >
        <div className={s.block}>
          <div className={s.container}>
            <div className="flex flex-wrap">
              <motion.div className="w-full lg:w-1/2" variants={childVariants}>
                <Link href="/">
                  <Image
                    className={`mx-auto sm:ml-0 ${s.logo__img}`}
                    src={'/assets/images/logo-white.png'}
                    alt={'Strong Zero'}
                    width={115}
                    height={84}
                  />
                </Link>
                <div
                  className={`flex justify-center lg:justify-start ${s.social_media}`}
                >
                  <a
                    href="https://www.facebook.com/minus196SEA"
                    className="mr-5"
                    target="_blank"
                  >
                    <Image
                      src={'/assets/images/facebook.svg'}
                      alt={'Facebook'}
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/minus196.sea/"
                    className="mr-5"
                    target="_blank"
                  >
                    <Image
                      src={'/assets/images/instagram.svg'}
                      alt={'Instagram'}
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@strongzerosea"
                    target="_blank"
                  >
                    <Image
                      src={'/assets/images/tiktok.svg'}
                      alt={'Tiktok'}
                      width={17.358}
                      height={20}
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div
                className={`w-full lg:w-1/6 ${s.nav_link}`}
                variants={childVariants}
              >
                <h3
                  onClick={() => handleToggle('contact')}
                  className={`${openSection === 'contact' ? s.open : ''} ${s.heading}`}
                >
                  Contact Us
                </h3>
                <div
                  className={`${s.nav_content} ${openSection === 'contact' ? s.open : ''}`}
                >
                  <a
                    href="https://www.facebook.com/messages/t/101299685165228/"
                    target="_blank"
                  >
                    Message us on Facebook
                  </a>
                </div>
              </motion.div>
              <motion.div
                className={`w-full lg:w-1/6 mt-5 lg:mt-0 ${s.nav_link}`}
                variants={childVariants}
              >
                <h3
                  onClick={() => handleToggle('legal')}
                  className={`${openSection === 'legal' ? s.open : ''} ${s.heading}`}
                >
                  Legal
                </h3>
                <div
                  className={`${s.nav_content} ${openSection === 'legal' ? s.open : ''}`}
                >
                  <ul className={s.nav_link}>
                    <li>
                      <a
                        href="https://www.beamsuntory.com/index.php/en/privacy-policy"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.beamsuntory.com/index.php/en/terms-and-conditions"
                        target="_blank"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.beamsuntory.com/en/cookie-policy"
                        target="_blank"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className={`w-full lg:w-1/6 ${s.nav_link}`}
                variants={childVariants}
              >
                <div
                  className={`${s.nav_content} ${openSection === 'legal' ? s.open : ''}`}
                  style={{ transitionDelay: '0.12s' }}
                >
                  <ul className="mt-0 lg:mt-8">
                    <li>
                      <a
                        href="https://www.beamsuntory.com/sites/default/files/BSI-Marketing-Code-of-Practice.pdf"
                        target="_blank"
                      >
                        Marketing Code
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.beamsuntory.com/en/supply-chain-transparency"
                        target="_blank"
                      >
                        Supply Chain Transparency
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className={s.divider}></div>
            <div className="flex flex-row justify-center lg:justify-end">
              <a
                href="https://www.drinksmart.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={'/assets/images/drink-smart.svg'}
                  alt={'Drink Smart'}
                  width={163}
                  height={39}
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className={s.copyright}>
          <div className={s.container}>
            <p>
              -196™ READY-T0-DRINK 9% ALC./VOL BEAM SUNTORY ASIA PTE LTD,
              SINGAPORE ©2024 BEAM SUNTORY ASIA PTE LTD. * -196™
              SUNTORY&apos;S NO.1 PREMIX BRAND IN JAPAN, 2022 SALES VOLUME, IWSR
            </p>
          </div>
        </div> */}
      </motion.footer>
    </>
  )
}

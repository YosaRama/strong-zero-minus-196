'use client'

import React from 'react'
import s from './index.module.scss'

export default function ContentsHomeSocialFeed() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.columnLeft}>
          <h3 className={`mt-36 mb-14 ${s.heading}`}>
            ADD FLAVOUR TO YOUR FEED
          </h3>
          <p className={s.subheading}>
            Follow MINUS 196 on Instagram, Facebook, and TikTok for refreshing
            content that packs a punch.
          </p>
        </div>
        <div className={s.columnRight}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          perferendis sint eligendi, saepe quidem eos nostrum corrupti aliquam
          magni aut deleniti ipsum quam nobis earum debitis, eaque cumque
          corporis consectetur.
        </div>
      </div>
    </section>
  )
}

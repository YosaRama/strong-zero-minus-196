'use client'

import Slider, { Settings as reactSlickSettings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import s from './index.module.scss'
import Button from '@/components/button'
import Image from 'next/image'
interface SlideItemProps {
  src: string
  alt: string
  url: string
}

const SlideItem = ({ src, alt, url }: SlideItemProps) => (
  <a href={url} className={s.slide_item}>
    <Image
      className={s.slide_item_image}
      src={src}
      alt={alt}
      width={420}
      height={420}
    />
  </a>
)

export default function ContentsHomeSocialFeed() {
  const imageSources = [
    { src: '/assets/images/dummy/IG-1.jpg', url: '#' },
    { src: '/assets/images/dummy/IG-2.jpg', url: '#' },
    { src: '/assets/images/dummy/IG-6.jpg', url: '#' },
    { src: '/assets/images/dummy/IG-7.jpg', url: '#' },
  ]

  let slickOptions: reactSlickSettings = {
    centerMode: false,
    centerPadding: '0px',
    vertical: true,
    infinite: true,
    slidesToShow: 2.2,
    slidesToScroll: 0.1,
    autoplay: true,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 0,
    responsive: [{ breakpoint: 768, settings: 'unslick' }],
  }

  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.column_left}>
          <h3
            className={`mt-10 xl:mt-20 2xl:mt-36 mb-10 lg:mb-14 mx-auto lg:mx-0 ${s.heading}`}
          >
            ADD FLAVOUR TO YOUR FEED
          </h3>
          <p className={`mx-auto lg:mx-0 ${s.subheading}`}>
            Follow MINUS 196 on Instagram, Facebook, and TikTok for refreshing
            content that packs a punch.
          </p>

          <div className={`mt-10 lg:mt-auto mb-10 ${s.social_media_link}`}>
            <Button
              text="Instagram"
              href="https://www.instagram.com/minus196.sea/"
              variant="outline"
              newTab={true}
            />
            <Button
              text="Facebook"
              href="https://www.facebook.com/minus196SEA"
              variant="outline"
              newTab={true}
            />
            <Button
              text="Tiktok"
              href="https://www.tiktok.com/@strongzerosea"
              variant="outline"
              newTab={true}
            />
          </div>
        </div>
        <div className={s.column_right}>
          <div className={`${s.vertical_images}`}>
            <Slider {...slickOptions}>
              {imageSources.map((image, index) => (
                <SlideItem
                  key={index}
                  src={image.src}
                  alt={`Vertical ${index + 1}`}
                  url={image.url}
                />
              ))}
            </Slider>
          </div>
          <div
            className={`${s.vertical_images} ${s.second_block} hidden lg:block`}
          >
            <Slider {...slickOptions}>
              {imageSources.map((image, index) => (
                <SlideItem
                  key={index}
                  src={image.src}
                  alt={`Vertical ${index + 1}`}
                  url={image.url}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

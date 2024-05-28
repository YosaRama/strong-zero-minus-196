// import AnimateText from '@/components/common/animate-text'
import s from './index.module.scss'
import Image from 'next/image'

export default function ContentsHomeLemonPop() {
  return (
    <>
      <section className={s.wrapper}>
        <div className={s.container}>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3">
              <Image
                className={s.pop_image}
                src={'/assets/images/whole.png'}
                alt={'Whole'}
                width={600}
                height={600}
              />
            </div>
            <div className="w-full lg:w-1/3">
              <Image
                className={s.pop_image}
                src={'/assets/images/freeze.png'}
                alt={'Freeze'}
                width={600}
                height={600}
              />
            </div>
            <div className="w-full lg:w-1/3">
              <Image
                className={s.pop_image}
                src={'/assets/images/crush.png'}
                alt={'Crush'}
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className={`mx-auto text-center ${s.content}`}>
            <p className={s.text}>
              Now, THIS is how you make MINUS 196! Shochu, Vodka, and Soda
              collide with explosive fruit flavour. Our cutting-edge Freeze
              Crush Technology™ locks in the intense taste of whole fruit –
              crushed and infused in spirits for extreme liquid power.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

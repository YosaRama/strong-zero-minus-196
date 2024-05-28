import s from './index.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className={s.wrapper}>
        <div className={s.block}>
          <div className={s.container}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <Image
                  className={`mx-auto sm:ml-0 ${s.logo__img}`}
                  src={'/assets/images/logo-white.png'}
                  alt={'Strong Zero'}
                  width={115}
                  height={84}
                />
                <div
                  className={`flex justify-center lg:justify-start ${s.social_media}`}
                >
                  <a href="" className="mr-5">
                    <Image
                      src={'/assets/images/facebook.svg'}
                      alt={'Facebook'}
                      width={20}
                      height={20}
                    />
                  </a>
                  <a href="" className="mr-5">
                    <Image
                      src={'/assets/images/instagram.svg'}
                      alt={'Instagram'}
                      width={20}
                      height={20}
                    />
                  </a>
                  <a href="">
                    <Image
                      src={'/assets/images/tiktok.svg'}
                      alt={'Tiktok'}
                      width={17.358}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className={`w-full lg:w-1/6 mb-5 sm:mb-0 ${s.nav_link}`}>
                <h3 className={s.heading}>Contact Us</h3>
                <a href="mailto:info@minus196.com.sg">info@minus196.com.sg</a>
              </div>
              <div className={`w-full lg:w-1/6 ${s.nav_link}`}>
                <h3 className={s.heading}>Legal</h3>
                <ul className={s.nav_link}>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="">Cookie Policy</a>
                  </li>
                </ul>
              </div>
              <div className={`w-full lg:w-1/6 ${s.nav_link}`}>
                <ul className="mt-0 sm:mt-8">
                  <li>
                    <a href="">Marketing Code</a>
                  </li>
                  <li>
                    <a href="">Supply Chain Transparency</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.divider}></div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end">
              <Image
                src={'/assets/images/drink-smart.svg'}
                alt={'Drink Smart'}
                width={163}
                height={39}
              />
              <p className="text-sm sm:ml-7 mt-4 sm:mt-0">
                Please enjoy responsibly. Only for ages above 18.
              </p>
            </div>
          </div>
        </div>
        <div className={s.copyright}>
          <div className={s.container}>
            <p>
              -196™ READY-T0-DRINK 9% ALC./VOL BEAM SUNTORY ASIA PTE LTD,
              SINGAPORE ©2024 BEAM SUNTORY ASIA PTE LTD. * -196™
              SUNTORY&apos;S NO.1 PREMIX BRAND IN JAPAN, 2022 SALES VOLUME, IWSR
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

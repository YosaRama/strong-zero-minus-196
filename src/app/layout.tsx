import Preloader from '@/components/preloader'
import type { Metadata } from 'next'
import { Barlow_Semi_Condensed } from 'next/font/google'
import '@/styles/global.scss'
import MainContainer from '@/components/container'
// import AgeGate from '@/components/age-gate'

const barlow = Barlow_Semi_Condensed({
  weight: ['300', '400', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {/* <AgeGate /> */}
        <Preloader />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  )
}

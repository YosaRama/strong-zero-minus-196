import type { Metadata } from 'next'
import { Barlow_Semi_Condensed } from 'next/font/google'
import '@/styles/global.scss'
import MainContainer from '@/components/container'
import AgeGateContent from '@/contents/age-gate'
// import Preloader from '@/components/preloader'

const barlow = Barlow_Semi_Condensed({
  weight: ['300', '400', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Strong Zero | Simply Unbeatable Taste',
  description:
    "Welcome to Strong Zero Southeast Asia. We're pumped to have you here. Discover Extreme Refreshment!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={barlow.className}>
        <AgeGateContent />
        {/* <Preloader /> */}
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  )
}

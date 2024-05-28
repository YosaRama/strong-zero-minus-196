import Footer from './footer'
import Header from './header'
// import s from './index.module.scss'

export default function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Header />

      {children}

      <Footer />
    </main>
  )
}

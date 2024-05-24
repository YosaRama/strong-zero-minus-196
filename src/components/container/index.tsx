import s from './index.module.scss'

export default function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className={s.container}>{children}</main>
}

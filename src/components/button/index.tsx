import React from 'react'
import Link from 'next/link'
import s from './index.module.scss'

interface ButtonProps {
  text: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ text, href, type = 'button' }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={s.button}>
        {text}
      </Link>
    )
  }

  return (
    <button type={type} className={s.button}>
      {text}
    </button>
  )
}

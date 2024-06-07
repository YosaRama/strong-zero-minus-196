import React from 'react'
import Link from 'next/link'
import s from './index.module.scss'

interface ButtonProps {
  text: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  newTab?: boolean
  variant?: 'outline' | 'filled'
}

export default function Button({
  text,
  href,
  type = 'button',
  variant,
  newTab = false,
}: ButtonProps) {
  const buttonClass = variant === 'outline' ? s.outline_button : s.button
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClass}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : ''}
      >
        {text}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClass}>
      {text}
    </button>
  )
}

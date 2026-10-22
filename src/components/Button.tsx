'use client'

import clsx from 'clsx'
import { track } from '@/lib/analytics'

const styles = {
  primary: 'action-primary',
  secondary: 'action-secondary',
}

export function Button({
  href,
  variant = 'primary',
  className,
  children,
  external,
}: {
  href: string
  variant?: keyof typeof styles
  className?: string
  children: React.ReactNode
  external?: boolean
}) {
  const cls = clsx(
    'action-button',
    styles[variant],
    className,
  )
  return (
    <a
      href={href}
      className={cls}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={() => track('cta_click', { destination: href })}
    >
      {children}
    </a>
  )
}

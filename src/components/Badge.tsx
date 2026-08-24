import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'glass' | 'ink' | 'accent' | 'paper'
}

export function Badge({ children, variant = 'glass' }: Props) {
  return <span className={`gh-badge gh-badge--${variant}`}>{children}</span>
}

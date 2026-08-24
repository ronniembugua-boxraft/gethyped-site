import type { ReactNode, CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Icons'

type Variant = 'accent' | 'primary' | 'surface' | 'quiet' | 'pink'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  children: ReactNode
  variant?: Variant
  size?: Size
  /** Internal route — renders a router Link. */
  to?: string
  /** External or mailto target — renders a plain anchor. */
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  /** Overrides the chip fill, for buttons sitting on a coloured card. */
  chipBg?: string
  chipFg?: string
  className?: string
}

const chipSize: Record<Size, number> = { sm: 11, md: 13, lg: 14 }

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  chipBg,
  chipFg,
  className = '',
}: Props) {
  const style: CSSProperties = {}
  if (chipBg) (style as Record<string, string>)['--btn-chip-bg'] = chipBg
  if (chipFg) (style as Record<string, string>)['--btn-chip-fg'] = chipFg

  const inner = (
    <>
      <span className="gh-btn__label">{children}</span>
      <span className="gh-btn__chip">
        <ArrowUpRight size={chipSize[size]} />
      </span>
    </>
  )

  const cls = `gh-btn gh-btn--${variant} gh-btn--${size} ${className}`.trim()

  if (to) {
    return (
      <Link className={cls} to={to} style={style}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a className={cls} href={href} style={style}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} type={type} onClick={onClick} style={style}>
      {inner}
    </button>
  )
}

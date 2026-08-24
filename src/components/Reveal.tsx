import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Stagger, in ms, applied as a transition delay. */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const Tag = as as 'div'
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`gh-reveal ${className}`.trim()}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  intro?: string
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="gh-container gh-pagehead">
      <Reveal>
        {eyebrow && <span className="gh-pagehead__eyebrow">{eyebrow}</span>}
        <h1 className="gh-pagehead__title">{title}</h1>
        {intro && <p className="gh-pagehead__intro">{intro}</p>}
        {children && <div className="gh-pagehead__actions">{children}</div>}
      </Reveal>
    </section>
  )
}

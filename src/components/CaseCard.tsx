import { Link } from 'react-router-dom'
import { Badge } from './Badge'
import { MediaWell } from './MediaWell'
import { Reveal } from './Reveal'
import { Play } from './Icons'
import type { CaseStudy } from '../data/cases'

type Props = {
  study: CaseStudy
  /** Drops the card down so a neighbouring card reads higher. */
  dropped?: boolean
  delay?: number
}

export function CaseCard({ study, dropped = false, delay = 0 }: Props) {
  return (
    <Reveal delay={delay}>
      <article className={`gh-wcard${dropped ? ' gh-wcard--dropped' : ''}`}>
        <MediaWell className="gh-wcard__bg" note={study.mediaNote} />
        <div className="gh-wcard__top">
          <span className="gh-wcard__play" aria-hidden="true">
            <Play />
          </span>
        </div>
        <div className={`gh-wcard__caption gh-wcard__caption--${study.tone}`}>
          <h3>
            <Link to={`/work/${study.slug}`} className="gh-wcard__link">
              {study.title}
            </Link>
          </h3>
          <Badge variant={study.tone === 'orange' ? 'ink' : 'paper'}>{study.badge}</Badge>
        </div>
      </article>
    </Reveal>
  )
}

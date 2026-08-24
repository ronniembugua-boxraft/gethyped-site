import { Badge } from './Badge'
import { Button } from './Button'
import { MediaWell } from './MediaWell'
import { Reveal } from './Reveal'
import type { Service } from '../data/expertise'

/** Chip fill per card tone, so the arrow chip always reads against the card. */
const chipFor: Record<Service['tone'], { bg: string; fg: string }> = {
  white: { bg: 'var(--gh-paper)', fg: 'var(--gh-ink)' },
  pink: { bg: 'var(--gh-pink)', fg: 'var(--gh-ink)' },
  green: { bg: 'var(--gh-green)', fg: 'var(--gh-ink)' },
  blue: { bg: 'var(--gh-blue)', fg: '#ffffff' },
}

export function ExpertiseCard({ service }: { service: Service }) {
  const chip = chipFor[service.tone]

  return (
    <Reveal>
      <article className={`gh-xcard gh-xcard--${service.tone}`}>
        <div className="gh-xcard__body">
          <Badge>Expertise</Badge>
          <h3 className="gh-xcard__title">{service.title}</h3>
          <span className="gh-xcard__spacer" />
          <p className="gh-xcard__lead">{service.lead}</p>
          <p className="gh-xcard__copy">{service.copy}</p>
          <Button
            variant="primary"
            chipBg={chip.bg}
            chipFg={chip.fg}
            to={`/expertise/${service.slug}`}
          >
            {service.cta}
          </Button>
        </div>
        <div className="gh-xcard__side">
          <span className="gh-xcard__number" aria-hidden="true">
            {service.number}
          </span>
          <MediaWell
            className={`gh-xcard__media${service.framed ? ' gh-xcard__media--framed' : ''}`}
            note={service.mediaNote}
          />
        </div>
      </article>
    </Reveal>
  )
}

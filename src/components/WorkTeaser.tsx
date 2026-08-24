import { Button } from './Button'
import { Reveal } from './Reveal'
import { CaseCard } from './CaseCard'
import { workTeaser } from '../content'
import { featuredCases } from '../data/cases'

export function WorkTeaser() {
  return (
    <section className="gh-container gh-section">
      <Reveal>
        <div className="gh-work__intro">
          <h2 className="gh-work__title">{workTeaser.title}</h2>
          <p className="gh-work__copy">{workTeaser.copy}</p>
          <Button variant="surface" to="/work">
            {workTeaser.cta}
          </Button>
        </div>
      </Reveal>

      <div className="gh-work__grid">
        {featuredCases.map((study, i) => (
          <CaseCard key={study.slug} study={study} dropped={i === 0} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

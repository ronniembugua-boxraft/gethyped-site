import { Navigate, useParams, Link } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { MediaWell } from '../components/MediaWell'
import { Reveal } from '../components/Reveal'
import { ContactBanner } from '../components/ContactBanner'
import { CaseCard } from '../components/CaseCard'
import { services, serviceBySlug } from '../data/expertise'
import { cases } from '../data/cases'

export default function ExpertiseDetail() {
  const { slug = '' } = useParams()
  const service = serviceBySlug(slug)

  if (!service) return <Navigate to="/expertise" replace />

  const related = cases.filter((c) => c.services.includes(service.title)).slice(0, 2)
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <section className={`gh-detailhero gh-detailhero--${service.tone}`}>
        <div className="gh-container gh-detailhero__inner">
          <Reveal>
            <Badge>Expertise {service.number}</Badge>
            <h1 className="gh-detailhero__title">{service.title}</h1>
            <p className="gh-detailhero__lead">{service.lead}</p>
            <p className="gh-detailhero__copy">{service.detail.intro}</p>
          </Reveal>
          <Reveal delay={80}>
            <MediaWell className="gh-detailhero__media" note={service.mediaNote} />
          </Reveal>
        </div>
      </section>

      <section className="gh-container gh-section">
        <Reveal>
          <h2 className="gh-section__title">How we do it</h2>
        </Reveal>
        <ol className="gh-steps">
          {service.detail.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 60} className="gh-steps__item">
              <span className="gh-steps__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="gh-container gh-section">
        <div className="gh-deliverables">
          <Reveal>
            <div className="gh-deliverables__head">
              <h2 className="gh-section__title">What you get</h2>
              <p>{service.detail.outcome}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="gh-deliverables__list">
              {service.detail.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="gh-container gh-section">
          <Reveal>
            <h2 className="gh-section__title">{service.title} in the wild</h2>
          </Reveal>
          <div className="gh-work__grid">
            {related.map((study, i) => (
              <CaseCard key={study.slug} study={study} dropped={i === 0} delay={i * 80} />
            ))}
          </div>
        </section>
      )}

      <section className="gh-container gh-section">
        <Reveal>
          <h2 className="gh-section__title">The other three</h2>
          <div className="gh-nextlinks">
            {others.map((other) => (
              <Link className="gh-nextlink" key={other.slug} to={`/expertise/${other.slug}`}>
                <span className="gh-nextlink__num">{other.number}</span>
                <span className="gh-nextlink__title">{other.title}</span>
                <span className="gh-nextlink__lead">{other.lead}</span>
              </Link>
            ))}
          </div>
          <div className="gh-backlink">
            <Button variant="quiet" to="/expertise">
              All expertise
            </Button>
          </div>
        </Reveal>
      </section>

      <ContactBanner />
    </>
  )
}

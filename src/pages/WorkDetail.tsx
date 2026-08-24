import { Navigate, useParams, Link } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { MediaWell } from '../components/MediaWell'
import { Reveal } from '../components/Reveal'
import { ContactBanner } from '../components/ContactBanner'
import { cases, caseBySlug } from '../data/cases'

export default function WorkDetail() {
  const { slug = '' } = useParams()
  const study = caseBySlug(slug)

  if (!study) return <Navigate to="/work" replace />

  const next = cases[(cases.findIndex((c) => c.slug === study.slug) + 1) % cases.length]

  return (
    <>
      <section className="gh-container gh-casehead">
        <Reveal>
          <Badge>{study.badge}</Badge>
          <h1 className="gh-casehead__title">{study.title}</h1>
          <p className="gh-casehead__client">
            for <span className="gh-todo">{study.client}</span>
          </p>
          <p className="gh-casehead__summary">{study.summary}</p>
          <ul className="gh-casehead__services">
            {study.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="gh-container">
        <Reveal>
          <MediaWell className="gh-casehero" note={study.mediaNote} />
        </Reveal>
      </section>

      <section className="gh-container gh-section">
        <div className={`gh-results gh-results--${study.tone}`}>
          {study.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 60} className="gh-results__item">
              <span className="gh-results__figure">{r.figure}</span>
              <span className="gh-results__label">{r.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gh-container gh-section">
        <div className="gh-story">
          <Reveal className="gh-story__block">
            <h2 className="gh-section__title">The challenge</h2>
            <p>{study.detail.challenge}</p>
          </Reveal>
          <Reveal className="gh-story__block" delay={60}>
            <h2 className="gh-section__title">What we did</h2>
            <p>{study.detail.approach}</p>
          </Reveal>
          <Reveal className="gh-story__block" delay={120}>
            <h2 className="gh-section__title">What happened</h2>
            <p>{study.detail.outcome}</p>
          </Reveal>
        </div>
      </section>

      <section className="gh-container gh-section">
        <Reveal>
          <Link className="gh-nextcase" to={`/work/${next.slug}`}>
            <span className="gh-nextcase__label">Next case</span>
            <span className="gh-nextcase__title">{next.title}</span>
          </Link>
          <div className="gh-backlink">
            <Button variant="quiet" to="/work">
              All work
            </Button>
          </div>
        </Reveal>
      </section>

      <ContactBanner />
    </>
  )
}

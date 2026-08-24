import { Link } from 'react-router-dom'
import { Button } from './Button'
import { MediaWell } from './MediaWell'
import { Reveal } from './Reveal'
import { ArrowRight } from './Icons'
import { intro } from '../content'

export function Intro() {
  return (
    <section className="gh-container gh-intro">
      <div className="gh-intro__grid">
        <Reveal>
          <MediaWell className="gh-intro__portrait" note={intro.portraitNote} />
        </Reveal>
        <Reveal delay={80}>
          <div className="gh-intro__card">
            <p className="gh-intro__copy">{intro.copy}</p>
            <div className="gh-intro__actions">
              <Button variant="surface" to={intro.ctaHref}>
                {intro.cta}
              </Button>
              <Link className="gh-iconbtn" to="/expertise" aria-label="See our expertise">
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

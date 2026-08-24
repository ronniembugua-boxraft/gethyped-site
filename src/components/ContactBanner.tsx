import { Button } from './Button'
import { Reveal } from './Reveal'
import { contactBanner, contactDetails } from '../content'

export function ContactBanner() {
  return (
    <section className="gh-container gh-section gh-contact">
      <Reveal>
        <h2 className="gh-contact__title">{contactBanner.title}</h2>
        <div className="gh-contact__actions">
          <Button variant="surface" size="lg" href={`mailto:${contactDetails.email}`}>
            {contactBanner.primary}
          </Button>
          <Button variant="accent" size="lg" to="/contact">
            {contactBanner.secondary}
          </Button>
        </div>
      </Reveal>

      <div className="gh-stamp" aria-hidden="true">
        <svg viewBox="0 0 96 96" width="96" height="96">
          <defs>
            <path id="gh-stamp-path" d="M48,48 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
          </defs>
          <text className="gh-stamp__text">
            <textPath href="#gh-stamp-path" startOffset="0">
              GET HYPED · GET NOTICED · GET RESULTS ·
            </textPath>
          </text>
          <text x="48" y="54" className="gh-stamp__mark" textAnchor="middle">
            GH
          </text>
        </svg>
      </div>
    </section>
  )
}

import { PageHeader } from '../components/PageHeader'
import { MediaWell } from '../components/MediaWell'
import { Reveal } from '../components/Reveal'
import { ContactBanner } from '../components/ContactBanner'
import { Logos } from '../components/Logos'
import { Button } from '../components/Button'

/* NOTE: this page was not in the reference design — the copy below is a
   first draft to be reviewed and replaced with the real story. */

const principles = [
  {
    title: 'Strategy before cameras',
    copy: 'We will not book a shoot until we can say who it is for and what it has to do. It is the cheapest hour you will spend on a project.',
  },
  {
    title: 'Formats, not one-offs',
    copy: 'A hero film you are scared to spend is worth less than five things you can post this month. We build repeatable formats and hand them over.',
  },
  {
    title: 'Numbers in the open',
    copy: 'You see what ran, what it cost and what it did. If something underperformed, that is in the report too.',
  },
  {
    title: 'Fast, on purpose',
    copy: 'Social moves weekly. Our process is built to match it — small crews, short turnarounds, decisions made in days rather than cycles.',
  },
]

const team = [
  { role: '[ROLE]', name: '[NAME]', note: 'Portrait — team member' },
  { role: '[ROLE]', name: '[NAME]', note: 'Portrait — team member' },
  { role: '[ROLE]', name: '[NAME]', note: 'Portrait — team member' },
  { role: '[ROLE]', name: '[NAME]', note: 'Portrait — team member' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We are the reason your content stops being a guess."
        intro="GetHyped is a content agency. We plan it, shoot it, push it out and measure it — so brands stop posting into the void and start seeing what the work is actually doing."
      >
        <Button variant="accent" to="/contact">
          Work with us
        </Button>
      </PageHeader>

      <section className="gh-container gh-section">
        <div className="gh-about__split">
          <Reveal>
            <MediaWell className="gh-about__media" note="Team photo — the studio" />
          </Reveal>
          <Reveal delay={80}>
            <div className="gh-about__copy">
              <p>
                We started because too much good work was dying in the feed. Brands were paying
                for beautiful films that nobody watched past the second second, and nobody could
                say why.
              </p>
              <p>
                So we built the agency backwards from the result. Strategy first, so there is a
                reason to make anything. Production second, at a pace that fills a library rather
                than a single slot. Distribution third, because reach is a decision, not luck. And
                data throughout, so next month is better than this one.
              </p>
              <p>
                We are small on purpose. You talk to the people making the work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gh-container gh-section">
        <Reveal>
          <h2 className="gh-section__title">How we work</h2>
        </Reveal>
        <div className="gh-principles">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="gh-principles__item">
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gh-container gh-section">
        <Reveal>
          <h2 className="gh-section__title">The team</h2>
          <p className="gh-section__intro">
            Replace these with the real crew — names, roles and portraits.
          </p>
        </Reveal>
        <div className="gh-team">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="gh-team__card">
                <MediaWell className="gh-team__photo" note={member.note} />
                <span className="gh-team__name gh-todo">{member.name}</span>
                <span className="gh-team__role gh-todo">{member.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Logos />
      <ContactBanner />
    </>
  )
}

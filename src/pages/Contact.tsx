import { useState } from 'react'
import type { FormEvent } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { socialIcons } from '../components/Icons'
import { contactDetails, footer } from '../content'
import { services } from '../data/expertise'

/* NOTE: this page was not in the reference design.
   The form has no backend yet — set FORM_ENDPOINT and remove the guard. */
const FORM_ENDPOINT = ''

const socialColumn = footer.columns.find((c) => 'social' in c)
const socials = socialColumn && 'social' in socialColumn ? socialColumn.social : []

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!FORM_ENDPOINT) {
      setError(
        'This form is not connected to a backend yet. Set FORM_ENDPOINT in src/pages/Contact.tsx, or mail us directly in the meantime.',
      )
      return
    }

    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data })
      if (!res.ok) throw new Error(String(res.status))
      setSent(true)
    } catch {
      setError('Something went wrong sending that. Mail us directly and we will pick it up.')
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Get Hyped!"
        intro="Tell us what you are trying to do and who you are trying to reach. We will come back with a straight answer about whether we can help."
      />

      <section className="gh-container gh-section">
        <div className="gh-contactgrid">
          <Reveal>
            <form className="gh-form" onSubmit={onSubmit} noValidate={false}>
              <div className="gh-form__row">
                <label className="gh-field">
                  <span>Name</span>
                  <input name="name" type="text" required autoComplete="name" />
                </label>
                <label className="gh-field">
                  <span>Company</span>
                  <input name="company" type="text" autoComplete="organization" />
                </label>
              </div>

              <div className="gh-form__row">
                <label className="gh-field">
                  <span>Email</span>
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label className="gh-field">
                  <span>Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
              </div>

              <label className="gh-field">
                <span>What do you need?</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Pick one
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="All of it">All of it</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>

              <label className="gh-field">
                <span>Tell us more</span>
                <textarea name="message" rows={5} required />
              </label>

              {error && (
                <p className="gh-form__error" role="alert">
                  {error}
                </p>
              )}
              {sent && (
                <p className="gh-form__ok" role="status">
                  Thanks — that landed. We come back within two working days.
                </p>
              )}

              <Button variant="accent" size="lg" type="submit">
                Send it
              </Button>
            </form>
          </Reveal>

          <Reveal delay={80}>
            <aside className="gh-contactaside">
              <div className="gh-contactaside__block">
                <h2>Rather just mail?</h2>
                <a className="gh-contactaside__big gh-todo" href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
                <a className="gh-contactaside__big gh-todo" href={`tel:${contactDetails.phone}`}>
                  {contactDetails.phone}
                </a>
              </div>

              <div className="gh-contactaside__block">
                <h2>Come by</h2>
                <span className="gh-todo">{contactDetails.street}</span>
                <span className="gh-todo">{contactDetails.city}</span>
              </div>

              <div className="gh-contactaside__block">
                <h2>Follow us</h2>
                <div className="gh-contactaside__socials">
                  {socials.map((s) => {
                    const Icon = socialIcons[s.label as keyof typeof socialIcons]
                    return (
                      <a key={s.label} href={s.href} aria-label={s.label} className="gh-iconbtn">
                        <Icon />
                      </a>
                    )
                  })}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}

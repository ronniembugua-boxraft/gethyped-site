import { Reveal } from './Reveal'
import { statement } from '../content'

export function Statement() {
  return (
    <section className="gh-container gh-section gh-statement">
      <Reveal>
        <p className="gh-statement__text">{statement}</p>
      </Reveal>
    </section>
  )
}

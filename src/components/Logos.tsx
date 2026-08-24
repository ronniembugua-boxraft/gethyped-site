import { Reveal } from './Reveal'
import { logos } from '../content'

export function Logos() {
  /* Duplicated once so the marquee loop has no visible seam. */
  const track = [...logos.items, ...logos.items]

  return (
    <section className="gh-section gh-logos">
      <div className="gh-container">
        <Reveal>
          <h2 className="gh-logos__title">{logos.title}</h2>
        </Reveal>
      </div>

      <div className="gh-logos__strip" aria-label="Brands we have worked with">
        <ul className="gh-logos__track">
          {track.map((name, i) => (
            <li className="gh-logos__cell" key={`${name}-${i}`} aria-hidden={i >= logos.items.length}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

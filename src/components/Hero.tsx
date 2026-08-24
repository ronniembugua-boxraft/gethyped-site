import { MediaWell } from './MediaWell'
import { Reveal } from './Reveal'
import { hero } from '../content'

export function Hero() {
  return (
    <section className="gh-container gh-hero">
      <Reveal>
        <h1 className="gh-hero__title">{hero.title}</h1>
        <p className="gh-hero__sub">{hero.sub}</p>
      </Reveal>

      <div className="gh-hero__grid">
        {hero.tiles.map((tile, i) =>
          tile.kind === 'stat' ? (
            <Reveal key={i} delay={i * 60}>
              <div className={`gh-hero__tile gh-hero__tile--${tile.tone}`}>
                <span className="gh-hero__figure">{tile.figure}</span>
                <span className="gh-hero__caption">
                  <b>{tile.label}</b>
                  <span>{tile.note}</span>
                </span>
              </div>
            </Reveal>
          ) : (
            <Reveal key={i} delay={i * 60}>
              <MediaWell className="gh-hero__media" note={tile.note} />
            </Reveal>
          ),
        )}
      </div>
    </section>
  )
}

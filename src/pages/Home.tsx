import { Hero } from '../components/Hero'
import { Statement } from '../components/Statement'
import { Intro } from '../components/Intro'
import { ExpertiseCard } from '../components/ExpertiseCard'
import { WorkTeaser } from '../components/WorkTeaser'
import { Logos } from '../components/Logos'
import { ContactBanner } from '../components/ContactBanner'
import { services } from '../data/expertise'

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Intro />
      <section className="gh-container gh-section">
        <h2 className="gh-visually-hidden">Our expertise</h2>
        <div className="gh-expertise__list">
          {services.map((service) => (
            <ExpertiseCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <WorkTeaser />
      <Logos />
      <ContactBanner />
    </>
  )
}

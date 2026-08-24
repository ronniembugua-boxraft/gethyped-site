import { PageHeader } from '../components/PageHeader'
import { ExpertiseCard } from '../components/ExpertiseCard'
import { ContactBanner } from '../components/ContactBanner'
import { Logos } from '../components/Logos'
import { services } from '../data/expertise'

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="Four things we do. In this order."
        intro="Strategy tells you what to make. Creation makes it. Activation gets it seen. Data tells you what to do next. Most agencies sell one of these — the results come from running all four together."
      />

      <section className="gh-container gh-section">
        <div className="gh-expertise__list">
          {services.map((service) => (
            <ExpertiseCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <Logos />
      <ContactBanner />
    </>
  )
}

import { PageHeader } from '../components/PageHeader'
import { CaseCard } from '../components/CaseCard'
import { ContactBanner } from '../components/ContactBanner'
import { Logos } from '../components/Logos'
import { cases } from '../data/cases'

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Content that scores."
        intro="Every project below started the same way: a brand with something worth saying and no format to say it in. Here is what we built, and what it did."
      />

      <section className="gh-container gh-section">
        <div className="gh-casegrid">
          {cases.map((study, i) => (
            <CaseCard key={study.slug} study={study} dropped={i % 2 === 0} delay={(i % 2) * 80} />
          ))}
        </div>
      </section>

      <Logos />
      <ContactBanner />
    </>
  )
}

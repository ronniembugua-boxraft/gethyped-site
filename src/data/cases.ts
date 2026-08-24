/**
 * Case studies.
 *
 * NOTE: the two homepage cases come from the reference design — their titles
 * are real, everything else is a first draft. The remaining cases are
 * scaffolding so the /work grid is not half empty. Replace with real work
 * before this goes live.
 */

export type CaseStudy = {
  slug: string
  title: string
  client: string
  tone: 'orange' | 'blue' | 'green' | 'pink'
  badge: string
  summary: string
  services: string[]
  results: { figure: string; label: string }[]
  mediaNote: string
  featured: boolean
  detail: {
    challenge: string
    approach: string
    outcome: string
  }
}

export const cases: CaseStudy[] = [
  {
    slug: 'soft-in-taste',
    title: 'Soft in taste, strong on screen',
    client: '[CLIENT NAME]',
    tone: 'orange',
    badge: 'Case',
    summary:
      'A food brand with a great product and no reason for anyone to look at it. We built a format around the making, not the packshot.',
    services: ['Social strategy', 'Content creation'],
    results: [
      { figure: '2.4M', label: 'Organic views' },
      { figure: '+180%', label: 'Follower growth' },
      { figure: '14', label: 'Formats shipped' },
    ],
    mediaNote: 'Case video 9:16',
    featured: true,
    detail: {
      challenge:
        'The product sold well in store and disappeared online. Everything being posted was a photo of the pack on a clean background — accurate, and completely forgettable.',
      approach:
        'We moved the camera behind the counter. The format became the process: hands, heat, sound, the moment the texture changes. Shot in batches, cut vertical, built to run weekly without a new concept every time.',
      outcome:
        'The first three posts outperformed the entire previous quarter. The format has been running since, made in-house from the templates we handed over.',
    },
  },
  {
    slug: 'content-that-tastes',
    title: 'Content that really tastes (and lands)',
    client: '[CLIENT NAME]',
    tone: 'blue',
    badge: 'Case',
    summary:
      'A hospitality group launching a new location with four weeks of notice and no existing audience in the city.',
    services: ['Social strategy', 'Content creation', 'Activation'],
    results: [
      { figure: '1.1M', label: 'Reach in launch month' },
      { figure: '6.8%', label: 'Engagement rate' },
      { figure: 'Sold out', label: 'Opening weekend' },
    ],
    mediaNote: 'Case video 9:16',
    featured: true,
    detail: {
      challenge:
        'A new venue, a fixed opening date and an audience that did not know the brand existed. Paid alone would have been expensive and forgettable.',
      approach:
        'We built anticipation before the doors opened — the build, the menu tests, the staff. Then put budget behind the three pieces that were already travelling on their own, and brought in local creators for the opening week.',
      outcome:
        'The opening weekend sold out before the paid campaign had finished running. The account kept the audience it built.',
    },
  },
  {
    slug: 'trade-that-travels',
    title: 'A trade brand that travels',
    client: '[CLIENT NAME]',
    tone: 'green',
    badge: 'Case',
    summary:
      'Recruitment content for a sector that everyone says cannot be made interesting on social.',
    services: ['Social strategy', 'Content creation', 'Data'],
    results: [
      { figure: '900K', label: 'Views' },
      { figure: '340', label: 'Qualified applications' },
      { figure: '−61%', label: 'Cost per hire' },
    ],
    mediaNote: 'Case video 9:16',
    featured: false,
    detail: {
      challenge:
        'Vacancies were being filled through agencies at a cost the business could not keep absorbing, and the careers page was doing nothing.',
      approach:
        'We stopped advertising jobs and started showing the work. Real people, real sites, real days. Applications came through the profile, not a form nobody found.',
      outcome:
        'Cost per hire fell by more than half within two quarters, and the content library is still being used.',
    },
  },
  {
    slug: 'campus-in-motion',
    title: 'A campus in motion',
    client: '[CLIENT NAME]',
    tone: 'pink',
    badge: 'Case',
    summary:
      'An education brand that needed to speak to sixteen-year-olds without sounding like a brochure.',
    services: ['Social strategy', 'Content creation'],
    results: [
      { figure: '3.2M', label: 'Views' },
      { figure: '+72%', label: 'Open day sign-ups' },
      { figure: '5', label: 'Student creators trained' },
    ],
    mediaNote: 'Case video 9:16',
    featured: false,
    detail: {
      challenge:
        'Everything the institution published was written for parents. The people actually choosing were not reading it.',
      approach:
        'We handed the camera to students, with a format and a standard to hit. We produced the anchor content and trained them to make the rest.',
      outcome:
        'Open day sign-ups rose, and the account is now largely run by the students it is aimed at.',
    },
  },
]

export const featuredCases = cases.filter((c) => c.featured)
export const caseBySlug = (slug: string) => cases.find((c) => c.slug === slug)

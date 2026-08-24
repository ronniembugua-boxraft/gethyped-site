/**
 * The four services. The homepage renders the summary fields; the
 * /expertise/:slug pages render `detail`.
 *
 * NOTE: only the summary copy comes from the reference design. Everything
 * under `detail` is a first draft written to fill the page out — review it
 * before this goes live.
 */

export type Service = {
  slug: string
  number: string
  tone: 'white' | 'pink' | 'green' | 'blue'
  title: string
  lead: string
  copy: string
  cta: string
  framed: boolean
  mediaNote: string
  detail: {
    intro: string
    steps: { title: string; copy: string }[]
    deliverables: string[]
    outcome: string
  }
}

export const services: Service[] = [
  {
    slug: 'social-strategy',
    number: '01',
    tone: 'white',
    title: 'Social strategy',
    lead: 'Smart strategy. Strong start.',
    copy: 'We dig deep into your brand, your audience and your goals. Then we turn the data into a clear plan with formats that score.',
    cta: 'More about social strategy',
    framed: true,
    mediaNote: 'Working shot — strategy session',
    detail: {
      intro:
        'Most content fails before anything is filmed. The audience is a guess, the platform is an afterthought and nobody agreed what success looks like. Strategy is where we fix that — before a single euro goes into production.',
      steps: [
        {
          title: 'Dig in',
          copy: 'We go through your brand, your category and your numbers. What has already run, what landed, what quietly died. No blank-page workshops.',
        },
        {
          title: 'Find the audience',
          copy: 'Who are we actually talking to, where do they spend their attention, and what makes them stop scrolling? We answer that with platform data, not personas invented in a meeting room.',
        },
        {
          title: 'Pick the formats',
          copy: 'A handful of repeatable formats beats a hundred one-offs. We define the ones that fit your brand and can be made week after week.',
        },
        {
          title: 'Set the bar',
          copy: 'We agree the metrics that matter before we start, so nobody is arguing about what a good month looks like three months in.',
        },
      ],
      deliverables: [
        'Audience and platform analysis',
        'Content pillars and tone of voice',
        'Three to five repeatable formats, fully specced',
        'Posting rhythm and channel plan',
        'A measurement framework with the targets set',
      ],
      outcome:
        'You walk away knowing what to make, who it is for, where it goes and how you will know it worked.',
    },
  },
  {
    slug: 'content-creation',
    number: '02',
    tone: 'pink',
    title: 'Content creation',
    lead: 'Content that stands out and hits.',
    copy: 'We make content that stands out. That sticks. That hits your audience. Creative, fast and full of energy. Always with the goal in sight.',
    cta: 'More about content creation',
    framed: false,
    mediaNote: 'Working shot — production day',
    detail: {
      intro:
        'A strategy is worth nothing until something exists to post. We shoot, edit and deliver — in-house, at the pace social actually moves.',
      steps: [
        {
          title: 'Concept',
          copy: 'We write against the formats from your strategy. Every idea has a hook, a reason to keep watching and a point.',
        },
        {
          title: 'Shoot',
          copy: 'Small crews, fast set-ups, a full day of material rather than one hero film. Studio, on location or at your own premises.',
        },
        {
          title: 'Edit',
          copy: 'Cut for the platform it lives on, not resized after the fact. Subtitles, sound design and versions per channel included.',
        },
        {
          title: 'Deliver',
          copy: 'Everything lands in your library, named and ready to schedule. No hunting through a shared drive.',
        },
      ],
      deliverables: [
        'Concepts and shooting scripts',
        'Production day with crew and direction',
        'Vertical edits per platform, with subtitles',
        'Stills and cut-downs from the same shoot',
        'Source files, organised and handed over',
      ],
      outcome:
        'A full content library from one production run — enough to post consistently for weeks, not one film you are afraid to spend.',
    },
  },
  {
    slug: 'activation',
    number: '03',
    tone: 'green',
    title: 'Activation',
    lead: 'Visible where and when it counts.',
    copy: 'The right content deserves to be seen. We put it where your audience already is, so your brand reaches the right people at exactly the right moment.',
    cta: 'More about activation',
    framed: false,
    mediaNote: 'Working shot — activation',
    detail: {
      intro:
        'Good content with no distribution is a hobby. Activation is how the work reaches people who have never heard of you — through paid, through creators, and through the timing of the post itself.',
      steps: [
        {
          title: 'Plan the spend',
          copy: 'We decide what earns paid support and what does not. Budget goes behind what is already working organically.',
        },
        {
          title: 'Target properly',
          copy: 'Audiences built from your own data and platform signals, then narrowed as the results come in.',
        },
        {
          title: 'Work with creators',
          copy: 'Where it fits, we bring in creators whose audience already overlaps with yours — briefed properly, not handed a script.',
        },
        {
          title: 'Iterate weekly',
          copy: 'Creative gets swapped on performance, not on a quarterly cycle. Underperformers come off fast.',
        },
      ],
      deliverables: [
        'Paid media plan and budget split',
        'Audience and targeting set-up',
        'Creator selection and briefing',
        'Weekly optimisation on live campaigns',
        'Spend and performance reporting',
      ],
      outcome:
        'Your content reaches beyond the people who already follow you — and you can see exactly what each euro bought.',
    },
  },
  {
    slug: 'data',
    number: '04',
    tone: 'blue',
    title: 'Data',
    lead: 'Insight that makes an impact.',
    copy: 'We dig into the numbers behind the content. So you can see in black and white what works, what could be better and where the growth is.',
    cta: 'More about data',
    framed: false,
    mediaNote: 'Working shot — dashboard',
    detail: {
      intro:
        'Every post is a test. Data is how we stop guessing which ones were worth running — and how the next month gets better than the last.',
      steps: [
        {
          title: 'Measure what matters',
          copy: 'Retention, saves, shares and clicks — the signals that predict growth. Not follower counts.',
        },
        {
          title: 'Report in plain language',
          copy: 'One dashboard, monthly. What ran, what happened, what we are changing. No 40-slide decks.',
        },
        {
          title: 'Find the pattern',
          copy: 'Across enough posts, the winners have things in common. We isolate them and write them back into the formats.',
        },
        {
          title: 'Feed it forward',
          copy: 'Every insight goes back into the strategy, so the plan is never more than a month out of date.',
        },
      ],
      deliverables: [
        'Tracking and dashboard set-up',
        'Monthly performance report',
        'Format-level breakdown of what worked',
        'Recommendations for the next cycle',
        'Quarterly review against the original targets',
      ],
      outcome:
        'You stop debating opinions about content and start making decisions from evidence.',
    },
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)

/**
 * Site-wide copy and homepage copy.
 * Anything in [BRACKETS] is a placeholder that needs a real value.
 */

export const nav = [
  { label: 'Expertise', href: '/expertise' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const hero = {
  title: 'Get Hyped. Get Noticed. Get Results.',
  sub: 'Done gambling on content that goes nowhere?',
  tiles: [
    {
      kind: 'stat',
      tone: 'blue',
      figure: '10M+',
      label: 'Organic views',
      note: 'In the past year alone',
    },
    { kind: 'media', note: 'Portrait — model at clothing rail' },
    {
      kind: 'stat',
      tone: 'green',
      figure: '30+',
      label: 'Brands helped',
      note: 'From start-up to multinational',
    },
    { kind: 'media', note: 'Campaign still — car' },
  ],
} as const

export const statement =
  'We make content that stands out. That sticks. That hits your audience and gets your brand moving. Fast, sharp and full of energy.'

export const intro = {
  copy: "We don't stop at pretty pictures and slick footage. We make it measurable. So you know exactly what works and what doesn't. Never content without a strategy. Never content without results.",
  cta: 'Get to know us',
  ctaHref: '/about',
  portraitNote: 'Portrait — team member',
}

export const workTeaser = {
  title: 'Content that scores.',
  copy: 'We tell your story in a way that actually lands with your audience — creative content that works and makes the difference.',
  cta: 'See all our work',
}

export const logos = {
  title: 'These brands got hyped.',
  /* Marks read off the reference strip. Replace each with a real SVG. */
  items: [
    'Salontopper',
    'seesing flex',
    'Graafschap College',
    'fides',
    '[CLIENT 5]',
    '[CLIENT 6]',
  ],
}

export const contactBanner = {
  title: "Let's Get Hyped!",
  primary: 'Mail us directly',
  secondary: 'Get Results',
}

export const contactDetails = {
  email: '[EMAIL ADDRESS]',
  phone: '[PHONE NUMBER]',
  street: '[STREET AND NUMBER]',
  city: '[POSTCODE AND CITY]',
  coc: '[COC NUMBER]',
  vat: '[VAT NUMBER]',
}

export type FooterColumn =
  | { title: string; links: readonly { label: string; href: string }[] }
  | { title: string; social: readonly { label: string; href: string }[] }
  | { title: string; lines: readonly string[] }

export const footer: { columns: readonly FooterColumn[]; legal: string } = {
  columns: [
    { title: 'Menu', links: nav },
    {
      title: 'Follow us',
      social: [
        { label: 'Instagram', href: '[INSTAGRAM URL]' },
        { label: 'LinkedIn', href: '[LINKEDIN URL]' },
        { label: 'TikTok', href: '[TIKTOK URL]' },
        { label: 'YouTube', href: '[YOUTUBE URL]' },
      ],
    },
    { title: 'Contact', lines: [contactDetails.email, contactDetails.phone] },
    { title: 'Address', lines: [contactDetails.street, contactDetails.city] },
  ],
  legal: '© 2026 GetHyped',
}

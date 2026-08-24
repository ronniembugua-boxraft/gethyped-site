type IconProps = { size?: number }

export function ArrowUpRight({ size = 13 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M3.5 9.5L9.5 3.5M9.5 3.5H4.5M9.5 3.5V8.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowRight({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Play({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 4.5L11.5 8L6 11.5V4.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LogoMark({ size = 17 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="7.25" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8.5 8.5H15.75" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

export function Instagram({ size = 17 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="13.1" cy="4.9" r="0.9" fill="currentColor" />
    </svg>
  )
}

export function LinkedIn({ size = 17 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.8 7.6V12.4M5.8 5.4V5.5M8.8 12.4V9.6C8.8 8.7 9.5 8 10.4 8C11.3 8 12 8.7 12 9.6V12.4M8.8 8V7.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function TikTok({ size = 17 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M10.6 2.5V11.2A2.9 2.9 0 1 1 7.7 8.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6 2.5C10.9 4.2 12.1 5.4 14 5.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function YouTube({ size = 17 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1.8" y="4.2" width="14.4" height="9.6" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.6 6.9L11.2 9L7.6 11.1V6.9Z" fill="currentColor" />
    </svg>
  )
}

export const socialIcons = {
  Instagram,
  LinkedIn,
  TikTok,
  YouTube,
} as const

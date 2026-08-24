import type { CSSProperties } from 'react'

type Props = {
  /** Real image. Omit while the shoot is outstanding — a marked well renders instead. */
  src?: string
  alt?: string
  /** Shown inside the placeholder so it is obvious what belongs here. */
  note: string
  ratio?: string
  className?: string
  style?: CSSProperties
}

export function MediaWell({ src, alt = '', note, ratio, className = '', style }: Props) {
  const merged: CSSProperties = { ...style }
  if (ratio) merged.aspectRatio = ratio

  return (
    <div className={`gh-media ${className}`.trim()} style={merged}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <span className="gh-media__note">{note}</span>
      )}
    </div>
  )
}

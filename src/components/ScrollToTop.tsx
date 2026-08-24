import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Every route change starts at the top, the way a page load would. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'instant' })
  }, [pathname])

  return null
}

import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from './Button'
import { LogoMark } from './Icons'
import { nav } from '../content'

export function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="gh-header" data-stuck={stuck}>
      <div className="gh-container gh-header__inner">
        <Link className="gh-logo" to="/" aria-label="GetHyped — home">
          <LogoMark />
          <span className="gh-logo__word">GETHYPED</span>
        </Link>

        <nav className="gh-nav" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="gh-header__end">
          <Button variant="pink" size="sm" to="/contact">
            Get Results
          </Button>

          <button
            className="gh-burger"
            type="button"
            aria-expanded={open}
            aria-controls="gh-mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="gh-burger__box" data-open={open}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        className="gh-mobilenav"
        id="gh-mobile-nav"
        aria-label="Mobile"
        data-open={open}
        hidden={!open}
      >
        <div className="gh-container gh-mobilenav__inner">
          {nav.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

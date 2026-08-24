import { Link } from 'react-router-dom'
import { LogoMark, socialIcons } from './Icons'
import { footer, contactDetails } from '../content'

export function Footer() {
  return (
    <footer className="gh-footer">
      <div className="gh-footer__panel">
        <div className="gh-footer__cols">
          {footer.columns.map((col) => (
            <div className="gh-footer__col" key={col.title}>
              <h3>{col.title}</h3>

              {'links' in col &&
                col.links.map((link) => (
                  <Link key={link.href} to={link.href}>
                    {link.label}
                  </Link>
                ))}

              {'social' in col && (
                <div className="gh-footer__socials">
                  {col.social.map((s) => {
                    const Icon = socialIcons[s.label as keyof typeof socialIcons]
                    return (
                      <a
                        className="gh-footer__social"
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                      >
                        <Icon />
                      </a>
                    )
                  })}
                </div>
              )}

              {'lines' in col &&
                col.lines.map((line) => (
                  <span key={line} className="gh-todo">
                    {line}
                  </span>
                ))}
            </div>
          ))}
        </div>

        <div className="gh-footer__base">
          <span>{footer.legal}</span>
          <span>
            COC <span className="gh-todo">{contactDetails.coc}</span> · VAT{' '}
            <span className="gh-todo">{contactDetails.vat}</span>
          </span>
        </div>
      </div>

      <div className="gh-footer__mark">
        <div className="gh-container gh-footer__markinner">
          <LogoMark size={48} />
          <span className="gh-footer__wordmark">GETHYPED</span>
        </div>
      </div>
    </footer>
  )
}

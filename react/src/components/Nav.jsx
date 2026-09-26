import { useEffect, useState } from 'react'
import { navLinks, profile, whatsappLink } from '../data/site'
import { icons } from './Icons'
import useTheme from '../hooks/useTheme'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-in">
          <a href="#top" className="logo">
            <span className="logo-mark">{profile.initials}</span>
            {profile.name}
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div className="nav-right">
            <button className="icon-btn" onClick={toggle} aria-label="Toggle dark mode">{icons.moon}</button>
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noopener noreferrer">Let's talk</a>
            <button
              className="icon-btn menu-btn"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              {icons.menu}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </div>
    </>
  )
}

import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteContent.js'
import Button from './Button.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors ${isActive ? 'text-rust' : 'text-ink/80 hover:text-ink'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${scrolled ? 'border-ink/10 bg-cream/95 backdrop-blur-sm' : 'border-transparent bg-cream'
        }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 items-center justify-center">
            <img
              src="/correctorangeremovebg.png"
              alt="We Are Not Thugs"
              width="112"
              height="48"
              className="h-full w-auto object-contain"
            />
          </span>
          {/* <span className="font-display text-[17px] font-medium leading-tight text-ink">
            We Are Not Thugs
          </span> */}
        </NavLink>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/donate" variant="primary">
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-2 py-3 text-[17px] font-medium ${isActive ? 'text-rust' : 'text-ink/85'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/donate" variant="primary" className="mt-2 justify-center" onClick={() => setOpen(false)}>
              Donate
            </Button>
            {/* <a href={`mailto:${org.email}`} className="mt-3 text-sm text-ink/60">
              {org.email}
            </a> */}
          </nav>
        </div>
      )}
    </header>
  )
}

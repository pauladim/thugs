import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'lucide-react'
import { org, navLinks } from '../data/siteContent.js'
import { programs } from '../data/programs.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center ">
              {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 19 L9 7 L12 13 L15 7 L21 19"
                  stroke="#C65D2E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
              <img src="correctorangeremovebg.png" alt="" />
            </span>
            {/* <span className="font-display text-[17px] text-cream">We Are Not Thugs</span> */}
          </Link>
          <p className="max-w-[26ch] text-sm leading-relaxed text-cream/65">
           A movement redefining narratives, rebuilding communities, and restoring dignity to those society has mislabeled.
          </p>
          <div className="mt-2 flex items-center gap-4">
            <a href={org.social.instagram} aria-label="Instagram" className="text-cream/60 hover:text-rust">
              <Instagram size={18} />
            </a>
            <a href={org.social.twitter} aria-label="X (Twitter)" className="text-cream/60 hover:text-rust">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
            <a href={org.social.tiktok} aria-label="TikTok" className="text-cream/60 hover:text-rust">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77h-3.18v13.3a2.87 2.87 0 1 1-2.87-2.87c.3 0 .59.05.86.13V10.2a6.1 6.1 0 1 0 5.19 6.02V9.48a8.05 8.05 0 0 0 4.71 1.52V7.82a4.84 4.84 0 0 1-.94-.13Z" />
              </svg>
            </a>
            <a href={org.social.youtube} aria-label="YouTube" className="text-cream/60 hover:text-rust">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-cream/50">Navigate</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-[15px] text-cream/80 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-cream/50">Programs</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {programs.slice(0, 5).map((program) => (
              <li key={program.id}>
                <Link to="/programs" className="text-[15px] text-cream/80 hover:text-cream">
                  {program.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-cream/50">Get in touch</h3>
          <ul className="mt-4 flex flex-col gap-3 text-[15px] text-cream/80">
            <li>{org.email}</li>
            <li>{org.phone}</li>
            <li>{org.address}</li>
            <li>{org.officeHours}</li>
          </ul>
          <Link
            to="/donate"
            className="mt-5 inline-flex items-center gap-2 rounded-sm bg-rust px-5 py-2.5 text-sm font-semibold text-cream hover:bg-rust-dark"
          >
            Donate now
          </Link>
        </div>
      </div>

      <div className="rule border-cream/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} We Are Not Thugs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-cream/70">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-cream/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

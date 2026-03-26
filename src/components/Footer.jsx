import { programs } from "../data/programsData";

const socialLinks = [
  {
    name: "X",
    url: "https://x.com/rectorpascal",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@rector_pascal",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.16-3.44-3.37-3.46-5.7-.02-1.29.3-2.58.95-3.71A5.987 5.987 0 0 1 7.04 8.78v4.21a1.944 1.944 0 0 0-1.02.9c-.3.57-.4 1.23-.27 1.86.15.75.59 1.41 1.2 1.82.78.52 1.82.63 2.68.31.57-.22 1.05-.63 1.35-1.15.35-.61.47-1.33.43-2.04.01-4.89-.04-9.78.03-14.67z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://instagram.com/rectorpascal",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@rectorpascal",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  }
];

export default function Footer({ setPage, setSelectedProgram }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo">WE ARE NOT THUGS</span>
          <p className="tagline">
            A movement redefining narratives, rebuilding communities, and
            restoring dignity to those society has mislabeled.
          </p>
          <div className="socials" style={{ marginTop: "1.5rem" }}>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={social.name}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          {["Home", "About", "Programs", "Projects", "Contact"].map((p) => (
            <span
              key={p}
              className="footer-link"
              onClick={() => setPage(p)}
            >
              {p}
            </span>
          ))}
        </div>
        <div className="footer-col">
          <h4>Programs</h4>
          {programs.map((p) => (
            <span
              key={p.t}
              className="footer-link"
              onClick={() => {
                setSelectedProgram(p);
                setPage("ProgramDetail");
              }}
            >
              {p.t}
            </span>
          ))}
        </div>
        <div className="footer-col">
          <h4>Get Involved</h4>
          {[
            { label: "Volunteer", page: "Contact" },
            { label: "Donate", page: "Donate" },
          ].map((item) => (
            <span
              key={item.label}
              className="footer-link"
              onClick={() => setPage(item.page)}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 We Are Not Thugs Movement. All rights reserved.</span>
        <span>Built with purpose · Driven by justice</span>
      </div>
    </footer>
  );
}

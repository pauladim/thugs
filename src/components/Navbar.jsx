import { useState, useEffect } from "react";

export default function Navbar({ activePage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const pages = ["Home", "About", "Programs", "Projects", "Donate", "Contact"];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => setPage("Home")}>
         <img 
           src="correctorangeremovebg.png" 
           alt="Logo"
           style={{
             height: "50px",
             width: "auto",
             objectFit: "contain",
             cursor: "pointer",
           }}
         />
        </div>
        <div className="nav-links">
          {pages.map((p) => (
            <span
              key={p}
              className={`nav-link${activePage === p ? " active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p}
            </span>
          ))}
          <button className="nav-cta" onClick={() => setPage("Contact")}>
            Join Us
          </button>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
          {pages.map((p) => (
            <span
              key={p}
              className={`nav-link${activePage === p ? " active" : ""}`}
              onClick={() => {
                setPage(p);
                setMenuOpen(false);
              }}
            >
              {p}
            </span>
          ))}
          <button
            className="nav-cta"
            onClick={() => {
              setPage("Contact");
              setMenuOpen(false);
            }}
          >
            Join Us
          </button>
        </div>
      )}
    </>
  );
}

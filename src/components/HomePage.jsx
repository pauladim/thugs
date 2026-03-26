import VideoSection from "./VideoSection";
import HeroCarousel from "./HeroCarousel";

export default function HomePage({ setPage }) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <HeroCarousel />
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-noise" />
        <div
          className="hero-content"
          style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}
        >
          <div>
            <div className="hero-badge">✦ A Movement for Change</div>
            <h1 className="hero-headline">
              <span>We Are</span>
              <span className="accent">Not Thugs.</span>
              <span className="line2">We Are Human.</span>
            </h1>
            <p className="hero-sub">
              Breaking stigma, challenging, stereotype, providing platform for strong telling, proving access to Rehabilitation, Recovery, and Reintegration.
              ONE LIFE AT A TIME
            </p>
            <div className="hero-actions">
              <button
                className="btn-primary"
                onClick={() => setPage("About")}
              >
                Discover Our Story
              </button>
              <button
                className="btn-outline"
                onClick={() => setPage("Programs")}
              >
                Our Programs
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "var(--cream)",
                    lineHeight: 1.6,
                    marginBottom: "0.8rem",
                  }}
                >
                  "WE ARE HUMANS, WE ARE VOICES THAT NEED TO BE HEARD AND WE ARE STORIES WAITING TO BE TOLD."
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--orange)",
                  }}
                >
                  — Rector Pascal
                </div>
              </div>
              <div className="hero-stats">
                {[
                  ["100+", "Outreaches"],
                  ["10+", "Places Visited"],
                  ["0", "Partners/ Sponsors"],
                  ["98%", "Program successes"],
                ].map(([n, l]) => (
                  <div className="stat-item" key={l}>
                    <span className="stat-num">{n}</span>
                    <span className="stat-label">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-scroll"
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* IMPACT STRIP */}
      {/* <div className="impact-strip">
        {[
       ["100+", "Outreaches"],
       ["10+", "Places Visited"],
       ["0", "Partners/ Sponsors"],
       ["98%", "Program successes"],
        ].map(([n, l], i) => (
          <div className="impact-item" key={l}>
            <div className="impact-num">{n}</div>
            <div className="impact-label">{l}</div>
          </div>
        ))}
      </div> */}

      {/* MISSION PREVIEW */}
      <section className="section">
        <div
          className="mission-grid"
          style={{
            backgroundImage: "url('/recmiss.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            padding: "3rem",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(13, 26, 6, 0.75)",
              borderRadius: "12px",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="section-tag">Our Mission</div>
            <h2 className="section-title">
              Reclaiming <span className="highlight">Narratives.</span>
              <br />
              Restoring <span className="green">Dignity.</span>
            </h2>
            <p className="section-desc">
              At the WE ARE NOT THUG INITIATIVE, our mission is to empower marginalized individuals, particularly those living on the streets, by providing a platform for storyteling, empowerment, and reintegration into society. We strive to provide access to resources, skills training, and support services that enable individuals to rebuild their lives with dignity.
            </p>
            <button
              className="btn-primary"
              style={{ marginTop: "2rem" }}
              onClick={() => setPage("About")}
            >
              Our Full Story →
            </button>
          </div>
          <div className="home-values-grid" style={{ position: "relative", zIndex: 1 }}>
            {[
              {
                icon: "💙",
                t: "Recovery Support",
                d: "Providing encouragement and resources for individuals on the journey to overcome substance use and rebuild their lives."
              },
              {
                icon: "📚",
                t: "Education & Awareness",
                d: "Raising awareness about substance use disorder and educating communities to replace stigma with understanding and compassion."
              },
              {
                icon: "🤝",
                t: "Community Outreach",
                d: "Connecting with communities through programs and events that promote drugfree living and offer support to those in need."
              },
              {
                icon: "🌱",
                t: "Life Rebuilding",
                d: "Helping individuals in recovery rediscover purpose through mentorship, life-skills guidance, and positive opportunities."
              },
            ].map(({ icon, t, d }) => (
              <div className="value-card" key={t}>
                <div className="value-icon">{icon}</div>
                <div className="value-title">{t}</div>
                <div className="value-desc">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FEATURED VIDEO */}
      <VideoSection />

      <div className="divider" />

      {/* PROGRAMS PREVIEW */}
      <section className="section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">
              Programs That <span className="green">Transform</span>
            </h2>
          </div>
          <button className="btn-outline" onClick={() => setPage("Programs")}>
            View All Programs
          </button>
        </div>
        <div className="programs-grid">
          {[
            {
              n: "01",
              icon: "🚭",
              t: "Drugfree'20",
              d: "DRUGFREE'20 aims to rehabilitate 20 marginalized individuals and individuals struggling with drug abuse in 1 Day, providing them with a chance to reintegrate into society with dignity.",
              image: "drugfree.jpeg"
            },
            {
              n: "02",
              icon: "🤝",
              t: "SUD treatment month outreach",
              d: "Community outreach program focused on raising awareness about Substance Use Disorder (SUD), connecting individuals with treatment resources, and supporting recovery through education, counseling referrals, and local support networks.",
              image: "sudhome2.jpeg"
            },
            {
              n: "03",
              icon: "🛍️",
              t: "PURCHASE DRUGFREE MERCH",
              d: "Support the DrugFree mission by purchasing official merchandise. Every item helps fund outreach programs, rehabilitation initiatives, and awareness campaigns aimed at empowering individuals and building drug-free communities.",
              image: "merch.jpeg"
            },
          ].map(({ n, icon, t, d, image }) => (
            <div
              className="program-card"
              key={t}
              onClick={() => setPage("Programs")}
              style={{
                '--bg-image': `url('/${image}')`
              }}
            >
              <div className="program-num">{n}</div>
              <div className="program-icon">{icon}</div>
              <div className="program-name">{t}</div>
              <div className="program-desc">{d}</div>
              <div className="program-link">
                Learn More <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

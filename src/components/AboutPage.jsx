import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function AboutPage() {
  const images = [
    'redbook.jpeg',
    'recabout.jpeg',
    'rectordiscuss.jpeg',
  ];

  return (
    <div className="page-enter" style={{ paddingTop: "80px" }}>
      {/* HERO */}
      <div
        style={{
          padding: "6rem 4rem 5rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(94,158,47,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          speed={1000}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(13, 26, 6, 0.7)',
                    backdropFilter: 'brightness(0.6)',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            About The Movement
          </div>
          <h1
            className="section-title"
            style={{
              fontSize: "clamp(3rem,5vw,4.5rem)",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 1.5rem",
            }}
          >
            More Than a Movement. <br />
            <span className="highlight">A Revolution of Truth.</span>
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.1rem",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Born from pain, built on purpose , We Are Not Thugs exists to
            challenge every system, narrative, and label that dehumanizes our
            people.
          </p>
        </div>
      </div>

      {/* STORY */}
      <section className="section">
        <div className="about-grid">
          <div>
            <div className="section-tag">Our Origin</div>
            <h2 className="section-title">
              Where <span className="green">We Began</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.7)",
                marginBottom: "1.2rem",
              }}
            >
              {/* We Are Not Thugs was founded in 2018 when a group of community
              leaders, formerly incarcerated individuals, and mothers of lost
              sons gathered in a church basement with a single question:{" "} */}
              <em style={{ color: "var(--cream)" }}>
                Why does the world only see a threat when they look at us?
              </em>
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.7)",
                marginBottom: "1.2rem",
              }}
            >
              What started as a storyteling platform became a national
              conversation a movement that refuses to accept dehumanization as
              inevitable, that insists our stories deserve to be told in full,
              and that our futures can be shaped by us.
            </p>
            {/* <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.7)",
              }}
            >
              Today, we operate in different cities, serve thousands annually, and
              partner with institutions, artists, and advocates committed to
              lasting systemic change.
            </p> */}
          </div>
          <div className="about-visual">
            <div className="about-img-frame">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('smilerector.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    // background: "linear-gradient(135deg, rgba(45,80,22,0.5), rgba(13,26,6,0.9))",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    {/* <div style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>
                      ✊🏿
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--green-glow)",
                      }}
                    >
                      Founded 2018
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="about-quote">
                "They gave us a label. We gave the world a mirror."
              </div>
              <div className="about-quote-author">Founder— Rector Pascal</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* VALUES */}
      <section className="section">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            What We Stand For
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Our Core <span className="highlight">Values</span>
          </h2>
        </div>
        <div className="values-grid">
          {[
            {
              icon: "👨🏿‍🤝‍👨🏿",
              t: "Dignity",
              d: "Every individual, regardless of their current situation (street living, addiction, etc.), deserves to have their inherent human worth recognized and restored.",
            },
            {
              icon: "❤️",
              t: "Compassion",
              d: "Approaching people with empathy and kindness instead of stigma, understanding the root causes of struggles like drug abuse.",
            },
            {
              icon: "🩺",
              t: "Rehabilitation",
              d: "Providing medical outreach, treatment support, and recovery resources to help people overcome substance abuse and rebuild their lives.",
            },
            {
              icon: "🏠",
              t: "Reintegration",
              d: "Helping marginalized individuals return to their communities, families, and society as productive members.",
            },
            {
              icon: "💡",
              t: "Hope & Second Chances",
              d: "Believing in transformation and the possibility of positive change for everyone, no matter their past.",
            },
            {
              icon: "👐",
              t: "Community Building",
              d: "Working collaboratively (with government, organizations, and locals) to create a more supportive, drugfree, and inclusive society for all.",
            },
          ].map(({ icon, t, d }) => (
            <div className="value-card" key={t}>
              <div className="value-icon">{icon}</div>
              <div className="value-title">{t}</div>
              <div className="value-desc">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* TEAM */}
      <section className="section">
        <div className="section-tag">The People</div>
        <h2 className="section-title">
          Leadership <span className="green">Team</span>
        </h2>
        <div className="leadership-grid">
          {[
            {
              name: "Rector Pascal",
              role: "Founder & Executive Director",
              initial: "RP",
            },
            { name: "Unamba Anthony", role: "Co-Founder", initial: "UA" },
            // { name: "Juliana Ferdinand", role: "Medical Aid Coordinator", initial: "JF" },
            { name: "Dr.Ajidahun Shina", role: "Chief Medical Aid Coordinator", initial: "AS" },
          ].map(({ name, role, initial }) => (
            <div
              key={name}
              style={{
                background: "rgba(22,34,8,0.7)",
                border: "1px solid rgba(94,158,47,0.15)",
                padding: "2rem 1.5rem",
                textAlign: "center",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(232,98,10,0.35)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(94,158,47,0.15)")
              }
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--green-mid), var(--green-light))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "var(--cream)",
                  border: "2px solid rgba(94,158,47,0.4)",
                }}
              >
                {initial}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "var(--cream)",
                  marginBottom: "0.3rem",
                }}
              >
                {name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
                {role}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

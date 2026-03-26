import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { programs } from "../data/programsData";

export default function ProgramsPage({ onSelectProgram = () => { }, onContact = () => { }, onDonate = () => {} }) {

  const carouselImages = [
    'sudbook.jpeg',
    'micrector.jpeg',
    'sudhome.jpeg',
  ];

  return (
    <div className="page-enter" style={{ paddingTop: 0 }}>
      <div
        style={{
          padding: "6rem 4rem 5rem",
          background: "linear-gradient(180deg, rgba(232,98,10,0.1) 0%, var(--dark) 100%)",
          borderBottom: "1px solid rgba(232,98,10,0.15)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          speed={900}
          style={{ position: "absolute", inset: 0, zIndex: 1 }}
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.95,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13, 26, 6, 0.7)",
            backdropFilter: "brightness(0.6)",
            zIndex: 2,
          }}
        />
        <div style={{ position: "relative", zIndex: 3 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Programs
          </div>
          <h1
            className="section-title"
            style={{
              fontSize: "clamp(3rem,5vw,4.5rem)",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 1.5rem",
            }}
          >
            Programs Built for <span className="highlight">Real Change</span>
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.1rem",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Every program we run was designed with our community not for it.
            Real needs. Real solutions.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="programs-grid">
          {programs.map(({ n, icon, t, tags, d, points, bg, images }) => (
            <div
              key={t}
              role="button"
              tabIndex={0}
              onClick={() => onSelectProgram({ n, icon, t, tags, d, points, bg, images })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectProgram({ n, icon, t, tags, d, points, bg, images });
                }
              }}
              style={{
                backgroundImage:
                  `linear-gradient(rgba(13,26,6,0.78), rgba(13,26,6,0.78)), url(/${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(94,158,47,0.15)",
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(94,158,47,0.35)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(94,158,47,0.15)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "rgba(94,158,47,0.15)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div style={{ fontSize: "1.8rem" }}>{icon}</div>
              </div>
              <div style={{ marginBottom: "0.7rem" }}>
                {tags.map((tg) => (
                  <span className="tag" key={tg}>
                    {tg}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                  marginBottom: "0.8rem",
                }}
              >
                {t}
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.6)",
                  marginBottom: "1.5rem",
                }}
              >
                {d}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.4rem",
                }}
              >
                {points.map((p) => {
                  if (p.toLowerCase() === "send us a dm") {
                    return (
                      <a
                        key={p}
                        href="https://wa.me/2347012345678" // Using dummy number, to be replaced by actual
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          fontSize: "0.85rem",
                          fontWeight: "700",
                          color: "var(--cream)",
                          background: "var(--orange)",
                          padding: "0.4rem 0",
                          borderRadius: "4px",
                          textDecoration: "none",
                          marginTop: "0.5rem",
                          gridColumn: "1 / -1",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--orange-glow)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "var(--orange)";
                          e.currentTarget.style.transform = "none";
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent card click
                      >
                        <span style={{ fontSize: "1rem" }}>💬</span>
                        {p}
                      </a>
                    );
                  }
                  return (
                    <div
                      key={p}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                      }}
                    >
                      <span style={{ color: "var(--green-glow)", fontSize: "0.6rem" }}>
                        ◆
                      </span>
                      {p}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(45,80,22,0.4), rgba(22,34,8,0.9))",
          border: "1px solid rgba(94,158,47,0.2)",
          borderLeft: "4px solid var(--orange)",
          padding: "3rem 4rem",
          maxWidth: "1400px",
          margin: "0 4rem 6rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "1.8rem",
              marginBottom: "0.5rem",
            }}
          >
            Ready to Get Involved?
          </h3>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.95rem" }}>
            Volunteer, partner, or donate — every action creates impact.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={onContact}>Volunteer Now</button>
          <button className="btn-outline" onClick={onDonate}>Donate</button>
        </div>
      </div>
    </div>
  );
}

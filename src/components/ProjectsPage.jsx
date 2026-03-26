import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Active", "Completed", "Upcoming"];
  const projects = [
    {
      status: "Active",
      cat: "Active",
      title: "DrugFree'20 Voices & Recovery Campaign",
      tags: ["Rehabilitation", "Storytelling", "Advocacy"],
      desc: "An ongoing campaign collecting and amplifying powerful, real-life stories of individuals overcoming substance abuse one testimony at a time. Through video features, social media outreach, and direct support, we restore dignity, reject the 'thug' label, and rally donations to fund treatment, counseling, family reintegration, and second chances for those on the path to a drug-free life.",
      location: "Lagos, Nigeria (with nationwide reach via online stories & partnerships)",
      year: "2025–Present",
      impact: "Multiple Lives Featured & Supported • Growing Testimonies of Transformation • Active Donation Drive for Rehab Support",
      image: "20box.jpeg",
    },
    {
      status: "Completed",
      cat: "Completed",
      title: "SUD Treatment Outreach",
      tags: ["Health", "Rehabilitation", "Community"],
      desc: "A targeted Substance Use Disorder (SUD) Treatment Month outreach in high-impact areas like Akala, Mushin, providing free medical screenings, addiction education, counseling referrals, and immediate support to individuals battling substance abuse on the streets. In collaboration with LASKADA and health professionals, we brought compassion, hope, and pathways to recovery  rejecting stigma and embracing second chances.",
      location: "Lagos, Nigeria (Akala, Mushin & surrounding communities)",
      year: "2026",
      impact: "Hundreds Reached with Free Health Services • Multiple Individuals Referred to Treatment • Stories of Hope & Early Recovery Shared",
      image: "sudhome.jpeg",
    },
    {
      status: "Active",
      cat: "Active",
      title: "Youth Stories & Youth Empowerment",
      tags: ["Storytelling", "Youth", "Recovery"],
      desc: "An ongoing initiative capturing and amplifying real stories of individuals overcoming substance abuse through video testimonies, social media features, and community sharing. We empower youth by highlighting journeys of resilience, providing mentorship glimpses, and using these narratives to prevent drug use, reduce stigma, and rally support for rehabilitation because every story shared restores dignity and inspires second chances.",
      location: "Lagos, Nigeria (Online reach + street/community focus in areas like Mushin, Akala)",
      year: "2025–Present",
      impact: "Multiple Personal Stories Featured (e.g., Rose, Olalekan, Blessing & more) • Active GoFundMe & Merch Support Raising Funds for Rehab • Youth & Community Engagement via Reels/Testimonies",
      image: "girlsud.jpeg",
    },
    {
      status: "Upcoming",
      cat: "Upcoming",
      title: "DrugFree'20 Campaign",
      tags: ["Rehabilitation", "Recovery", "Community"],
      desc: "Our flagship movement to rehabilitate 20 marginalized individuals battling substance abuse in Lagos providing immediate treatment access, medical support, counseling, family reintegration, and long-term pathways to sobriety. We reject labels like 'thugs' and choose compassion, dignity, and second chances to transform lives and communities.",
      location: "Lagos, Nigeria (Multi-area focus: Mushin, Akala, Surulere & beyond)",
      year: "2026",
      impact: "20+ Lives Targeted for Rehabilitation • Multiple Outreaches Completed • Growing Donor & Volunteer Network",
      image: "free20.jpeg",
    },
    // {
    //   status: "Completed",
    //   cat: "Completed",
    //   title: "Healing Circles Initiative",
    //   tags: ["Mental Health"],
    //   desc: "Trauma-informed healing circles run in partnership with licensed therapists, serving communities that traditional mental health systems have failed.",
    //   location: "Chicago, IL",
    //   year: "2021–2022",
    //   impact: "1,200 Participants",
    // },
    {
      status: "Active",
      cat: "Active",
      title: "Rebuild & Reintegrate Initiative",
      tags: ["Reintegration", "Skills", "Employment"],
      desc: "An ongoing program equipping individuals in recovery from substance abuse with practical skills, dignified handiwork, mentorship, and pathways to economic independence. We connect them to opportunities, reject stigma, and support reintegration into families and communities because true second chances include building sustainable futures beyond survival.",
      location: "Lagos, Nigeria (Focus areas: Mushin, Akala, Surulere & community networks)",
      year: "2025–Present",
      impact: "Multiple Individuals Supported with Skills & Mentorship • Stories of Transformation & Self-Sufficiency Shared • Growing Donor Support for Vocational Pathways",
      image: "recabout.jpeg",
    },
  ];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="page-enter" style={{ paddingTop: "80px" }}>
      <div
        style={{
          padding: "6rem 4rem 5rem",
          background: "var(--dark)",
          borderBottom: "1px solid rgba(94,158,47,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(/hands20.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13, 26, 6, 0.7)",
            backdropFilter: "brightness(0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(45,80,22,0.25), transparent)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
          <div className="section-tag">Projects</div>
          <h1 className="section-title" style={{ fontSize: "clamp(3rem,5vw,4.5rem)" }}>
            Work That <span className="green">Moves</span>{" "}
            <span className="highlight">Mountains</span>
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
            }}
          >
            From grassroots campaigns to policy reform, here is where our
            values become action.
          </p>
        </div>
      </div>
      <section className="section">
        {/* FILTER */}
        <div
          style={{
            display: "flex",
            gap: "0.8rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                background: filter === c ? "var(--orange)" : "rgba(22,34,8,0.7)",
                border:
                  filter === c
                    ? "1px solid var(--orange)"
                    : "1px solid rgba(94,158,47,0.2)",
                color: filter === c ? "white" : "var(--muted)",
                padding: "0.55rem 1.4rem",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                clipPath:
                  filter === c
                    ? "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
                    : "none",
                transition: "all 0.3s",
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map(({ status, title, tags, desc, location, year, impact, image }) => (
            <div
              key={title}
              style={{
                background:
                  "linear-gradient(135deg, rgba(22,34,8,0.9), rgba(13,26,6,0.95))",
                border: "1px solid rgba(94,158,47,0.15)",
                padding: "2.5rem",
                transition: "all 0.4s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
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
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(/${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(13, 26, 6, 0.8)",
                  backdropFilter: "brightness(0.4)",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      status === "Active"
                        ? "linear-gradient(90deg, var(--green-glow), transparent)"
                        : status === "Completed"
                          ? "linear-gradient(90deg, var(--orange), transparent)"
                          : "linear-gradient(90deg, var(--muted), transparent)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    className={`project-status${status === "Completed" ? " completed" : ""}`}
                  >
                    {status}
                  </span>
                  <div>
                    {tags.map((tg) => (
                      <span className="tag orange" key={tg}>
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--cream)",
                    marginBottom: "0.8rem",
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.6)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {desc}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                    gap: "1rem",
                    borderTop: "1px solid rgba(94,158,47,0.12)",
                    paddingTop: "1.2rem",
                  }}
                >
                  {[["📍", location], ["📅", year], ["✨", impact]].map(
                    ([ic, val]) => (
                      <div key={val} style={{ fontSize: "0.78rem" }}>
                        <div style={{ color: "var(--muted)", marginBottom: "0.2rem" }}>
                          {ic}
                        </div>
                        <div style={{ color: "var(--cream)", fontWeight: 600 }}>
                          {val}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

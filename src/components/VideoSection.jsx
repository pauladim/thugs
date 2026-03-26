import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [playingVideos, setPlayingVideos] = useState({
    community: false,
    rebuilding: false,
    youth: false,
  });

  const toggleVideo = (videoKey) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [videoKey]: !prev[videoKey],
    }));
  };

  return (
    <div 
      className="video-section"
      style={{
        backgroundImage: "url('/book.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(13, 26, 6, 0.75)",
        }}
      />
      <div 
        className="video-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div className="section-tag" style={{ justifyContent: "center", color: "red" }}>
            Suscribe to our youtube channel
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Watch, Listen, <span className="highlight">Feel.</span>
          </h2>
          {/* <p
            style={{
              color: "rgba(245,240,232,0.6)",
              maxWidth: "500px",
              margin: "0 auto",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            These are our voices. Our truths. Our humanity captured in film.
          </p> */}
        </div>
        <div className="video-wrapper">
          {!playing ? (
            <div 
              className="video-placeholder" 
              onClick={() => setPlaying(true)}
              style={{
                backgroundImage: "url('https://img.youtube.com/vi/7K5LG34yTOw/sddefault.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  // background: "rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                 "We Are Not Thugs: Untold Stories"
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "var(--cream)",
                    textAlign: "center",
                    maxWidth: "400px",
                    lineHeight: 1.2,
                  }}
                >
                    "Dangers Of Drug Abuse"
                </div>
                <div className="play-btn" style={{ background: 'transparent', boxShadow: 'none' }}>
                  <svg viewBox="0 0 68 48" width="68" height="48">
                    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#ff0000"></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                  </svg>
                </div>
                <div className="video-caption">Click to Watch · 13 minutes</div>
              </div>
            </div>
          ) : (
            <iframe
              className="video-embed"
              src="https://www.youtube-nocookie.com/embed/7K5LG34yTOw?autoplay=1"
              // title="Dangers Of Drug Abuse"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
        <div className="video-grid" style={{ marginTop: "2rem" }}>
          {[
            // { label: "Community Voices", dur: "8 min", key: "community", id: "efRrOHyuxv8" },
            // { label: "Rebuilding Lives", dur: "12 min", key: "rebuilding", id: "" },
            // { label: "Youth Rising", dur: "6 min", key: "youth", id: "" },
          ].map(({ label, dur, key, id }) => (
            <div key={label}>
              {!playingVideos[key] ? (
                <div
                  className="video-thumb"
                  onClick={() => toggleVideo(key)}
                  style={{ 
                    cursor: "pointer",
                    backgroundImage: id ? `url('https://img.youtube.com/vi/${id}/hqdefault.jpg')` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="video-thumb-inner">
                    <div className="mini-play">▶</div>
                  </div>
                  <div className="video-thumb-label">
                    {label} · <span style={{ color: "var(--muted)" }}>{dur}</span>
                  </div>
                </div>
              ) : (
                <div style={{ marginBottom: "1rem" }}>
                  {id ? (
                    <>
                      <iframe
                        className="video-embed"
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
                        title={label}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                          width: "100%",
                          height: "300px",
                          borderRadius: "8px",
                        }}
                      />
                      <button
                        onClick={() => toggleVideo(key)}
                        style={{
                          marginTop: "0.5rem",
                          padding: "0.5rem 1rem",
                          background: "var(--orange)",
                          color: "var(--dark)",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        Close
                      </button>
                    </>
                  ) : (
                    <div style={{ padding: "1rem", background: "rgba(0,0,0,0.3)", borderRadius: "8px", color: "var(--muted)" }}>
                      Video coming soon
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

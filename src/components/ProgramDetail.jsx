import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

export default function ProgramDetail({ program, setPage, setSelectedProgram }) {

  // Ensure images exist, otherwise fall back to background image
  const images =
    program?.images && program.images.length > 0
      ? program.images
      : program?.bg
        ? [program.bg]
        : [];

  // If no program selected
  if (!program) {
    return (
      <div className="page-enter" style={{ paddingTop: 0, padding: "4rem" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>No program selected</h2>
          <p style={{ marginBottom: "2rem", color: "rgba(245,240,232,0.75)" }}>
            Please go back to the Programs list and choose a program to view more details.
          </p>
          <button
            className="btn-primary"
            onClick={() => setPage("Programs")}
          >
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ paddingTop: 0 }}>

      {/* Header */}
      <div
        style={{
          padding: "5.5rem 4rem 4rem",
          background:
            `url(/${program.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderBottom: "1px solid rgba(232,98,10,0.15)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(232,98,10,0.12) 0%, rgba(13, 26, 6, 0.8) 100%)",
            zIndex: 1,
          }}
        />

        {/* Back Button */}
        <motion.button
          className="btn-outline"
          onClick={() => {
            setSelectedProgram(null);
            setPage("Programs");
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          style={{ position: "absolute", left: "2rem", top: "6rem", zIndex: 10 }}
        >
          ← Back
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Programs
          </div>

          <h1
            className="section-title"
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 1.5rem",
            }}
          >
            {program.icon} {program.t}
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.05rem",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {program.d}
          </p>
        </motion.div>
      </div>

      {/* Image Slider */}
      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            loop
            speed={300}
            style={{ borderRadius: 18, overflow: "hidden" }}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    width: "100%",
                    height: 420,
                    backgroundImage: `url(/${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Image Grid for DrugFree'20 */}
          {program.t === "DrugFree'20" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              style={{
                marginTop: "2.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: "100%",
                    height: 150,
                    backgroundImage: `url(/${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 12,
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </motion.div>
          )}

          {/* Program Points */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {program.points.map((point) => {
              if (point.toLowerCase() === "send us a dm") {
                return (
                  <motion.a
                    key={point}
                    href="https://wa.me/2348059657148" // Using dummy number, to be replaced by actual
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    style={{
                      background: "rgba(20, 34, 14, 0.75)",
                      border: "1px solid rgba(94,158,47,0.4)",
                      borderRadius: 14,
                      padding: "1.3rem 1.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.75rem",
                      textDecoration: "none",
                      color: "var(--cream)",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(45, 80, 22, 0.85)";
                      e.currentTarget.style.borderColor = "var(--green-glow)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(20, 34, 14, 0.75)";
                      e.currentTarget.style.borderColor = "rgba(94,158,47,0.4)";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>💬</span>
                    {point}
                  </motion.a>
                );
              }
              return (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  style={{
                    background: "rgba(20, 34, 14, 0.75)",
                    border: "1px solid rgba(94,158,47,0.15)",
                    borderRadius: 14,
                    padding: "1.3rem 1.4rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--green-glow)",
                      fontSize: "1.1rem",
                    }}
                  >
                    ◆
                  </span>
                  <span
                    style={{
                      color: "rgba(245,240,232,0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {point}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
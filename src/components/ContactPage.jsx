import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    interest: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Admin",
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          interest: form.interest,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "", interest: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-enter">
      <div
        style={{
          padding: "10rem clamp(1.5rem, 5vw, 4rem) 5rem",
          backgroundImage: "url('/contac.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(232,98,10,0.12)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13, 26, 6, 0.75)",
            backdropFilter: "brightness(0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(232,98,10,0.15), transparent)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Get In Touch
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
            Join the <span className="highlight">Conversation.</span> <br />
            Be Part of the <span className="green">Change.</span>
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.1rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Whether you want to volunteer, partner, donate, or simply connect,
            we want to hear from you.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="contact-grid">
          <div>
            <div className="section-tag">Contact Info</div>
            <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>
              Let's <span className="green">Connect</span>
            </h2>
            <div className="contact-info">
              {[
                {
                  icon: "📍",
                  label: "Headquarters",
                  value: "Lagos, Nigeria",
                },
                { icon: "📧", label: "Email Us", value: "ferdinandpascal5@gmail.com" },
                { icon: "📞", label: "Call Us", value: "+234 (708) 439-4859" },
                { icon: "🕐", label: "Office Hours", value: "Mon–Fri: 9AM – 6PM WAT" },
              ].map(({ icon, label, value }) => (
                <div className="contact-item" key={label}>
                  <div className="contact-icon">{icon}</div>
                  <div className="contact-detail">
                    <div className="label">{label}</div>
                    <div className="value">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "3rem",
                padding: "2rem",
                background: "rgba(22,34,8,0.6)",
                border: "1px solid rgba(94,158,47,0.15)",
                borderLeft: "3px solid var(--green-glow)",
              }}
            >
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
                "Every message we receive is a reminder that this movement is
                growing, that more people are waking up to the truth."
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                }}
              >
                — Unamba Anthony, Co-Founder
              </div>
            </div>
          </div>
          <div>
            <div className="contact-form">
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                  color: "var(--cream)",
                }}
              >
                Send Us a Message
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    className="form-input"
                    placeholder="Full Name"
                    value={form.name}
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Area of Interest</label>
                <select
                  className="form-select"
                  value={form.interest}
                  required
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  style={{
                    background: "rgba(13,26,6,0.8)",
                    border: "1px solid rgba(94,158,47,0.2)",
                    color: form.interest
                      ? "var(--cream)"
                      : "rgba(138,158,117,0.5)",
                    padding: "0.85rem 1rem",
                    width: "100%",
                    fontFamily: "'Barlow',sans-serif",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                >
                  <option value="">Select an option...</option>
                  <option>Volunteer</option>
                  <option>Donate</option>
                  <option>Partnership / Sponsorship</option>
                  <option>Media Inquiry</option>
                  <option>Program Enrollment</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  required
                  placeholder="Message subject..."
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  required
                  placeholder="Tell us what's on your mind..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                className="btn-primary"
                style={{ width: "100%", padding: "1.1rem", fontSize: "0.95rem" }}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </section>
      {(sent || error) && (
        <div className="modal-overlay" onClick={() => { setSent(false); setError(null); }}>
          <div className={`modal-content ${sent ? 'success' : 'error'}`} onClick={(e) => e.stopPropagation()}>
            <div className={`modal-icon ${sent ? 'success' : 'error'}`}>
              {sent ? '✓' : '!'}
            </div>
            <h3 className="modal-title">
              {sent ? 'Message Sent!' : 'Submission Error'}
            </h3>
            <p className="modal-body">
              {sent 
                ? "Thank you for reaching out. We'll be in touch shortly." 
                : error}
            </p>
            <button
              className="btn-outline"
              style={{ padding: "0.8rem 2rem", width: "100%" }}
              onClick={() => { setSent(false); setError(null); }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

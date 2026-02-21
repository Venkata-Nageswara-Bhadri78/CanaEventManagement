import { useState, useEffect, useRef } from "react";

// 🖼️ import contactBg from '../assets/images/contact/contact-bg.jpg'

const CONTACT_INFO = [
  { icon: "📍", label: "Head Office",  value: "No. 7A, Sundaramoorthy Street, Jafferkhanpet, Chennai - 600 083" },
  { icon: "📞", label: "Phone",        value: "+91 98765 43210" },
  { icon: "✉️", label: "Email",        value: "hello@canaeventmanagement.in" },
  { icon: "🕐", label: "Working Hrs",  value: "Mon – Sat  |  9:00 AM – 7:00 PM" },
];

export default function ContactSection() {
  const [form, setForm]   = useState({ firstName: "", lastName: "", phone: "", email: "", eventType: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [focused, setFocused] = useState("");
  const [inView, setInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: "", lastName: "", phone: "", email: "", eventType: "", message: "" });
  };

  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const pOffset = (scrollY - sectionTop) * 0.3;

  const inputStyle = (field) => ({
    width: "100%",
    padding: "16px 20px",
    background: focused === field ? "rgba(201,168,76,0.05)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? "rgba(201,168,76,0.6)" : "rgba(255,255,255,0.1)"}`,
    color: "#fff",
    fontFamily: "'Cormorant Garamond',serif",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === field ? "0 0 20px rgba(201,168,76,0.1), inset 0 0 10px rgba(201,168,76,0.03)" : "none",
  });

  return (
    <section ref={sectionRef} id="contact" style={{ position: "relative", overflow: "hidden", background: "#030303" }}>

      {/* Parallax bg */}
      <div style={{
        position: "absolute", inset: "-20%",
        /* swap: backgroundImage: `url(${contactBg})`, backgroundSize:"cover", backgroundPosition:"center" */
        background: "linear-gradient(135deg, #060c06 0%, #0c1a0c 30%, #060c06 60%, #030303 100%)",
        transform: `translateY(${pOffset}px)`,
        zIndex: 0,
      }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.72)", zIndex: 1 }} />

      {/* Animated particles / bokeh */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: `${20 + i * 15}px`, height: `${20 + i * 15}px`,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(201,168,76,${0.06 - i * 0.005}) 0%, transparent 70%)`,
          left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%`,
          animation: `floatOrb ${5 + i * 0.7}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.4}s`,
          pointerEvents: "none", zIndex: 1,
        }} />
      ))}

      {/* Gold beam top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, transparent, #C9A84C, #F5D98B, #C9A84C, transparent)", zIndex: 3 }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "100px 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px",
            opacity: inView ? 1 : 0, transition: "all 0.8s ease" }}>
            <span style={{ width: "50px", height: "1px", background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase" }}>Get In Touch</span>
            <span style={{ width: "50px", height: "1px", background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>
          <h2 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 900,
            fontSize: "clamp(28px,5vw,64px)", color: "#fff", lineHeight: 1.1,
            opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s ease 0.15s",
          }}>
            Let's Create{" "}
            <span style={{
              background: "linear-gradient(90deg,#C9A84C,#F5D98B,#C9A84C)", backgroundSize: "200%",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}>Magic</span>
            {" "}Together
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
            fontSize: "clamp(14px,1.5vw,18px)", color: "rgba(255,255,255,0.4)", marginTop: "12px",
            opacity: inView ? 1 : 0, transition: "all 0.8s ease 0.25s",
          }}>Tell us about your dream event — we'll handle the rest</p>
        </div>

        {/* Two column */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "start" }} className="contact-grid">

          {/* LEFT — Info */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)", transition: "all 0.9s ease 0.3s" }}>
            <p style={{
              fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
              fontSize: "clamp(14px,1.5vw,18px)", color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9, marginBottom: "48px",
            }}>
              From a grand wedding to an electrifying college fest, our team is ready to turn your vision into reality. 
              Reach out today and let's start planning your <span style={{ color: "#C9A84C" }}>unforgettable event</span>.
            </p>

            {CONTACT_INFO.map((info, i) => (
              <div key={i} style={{
                display: "flex", gap: "18px", alignItems: "flex-start",
                padding: "20px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                <div style={{
                  width: "44px", height: "44px", flexShrink: 0, borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", background: "rgba(201,168,76,0.05)",
                }}>{info.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "3px", color: "#C9A84C", textTransform: "uppercase", marginBottom: "4px" }}>
                    {info.label}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                    {info.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
              {[["📸","Instagram","#"],["👤","Facebook","#"],["▶","YouTube","#"],["💬","WhatsApp","#"]].map(([icon, label, href]) => (
                <a key={label} href={href} title={label} style={{
                  width: "44px", height: "44px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", color: "#C9A84C",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  background: "rgba(201,168,76,0.03)",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.15)"; e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,168,76,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div style={{
            padding: "48px 44px",
            border: "1px solid rgba(201,168,76,0.18)",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(20px)",
            position: "relative",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.9s ease 0.4s",
          }}>
            {/* Corner accents */}
            {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h]) => (
              <div key={`${v}${h}`} style={{
                position: "absolute", [v]: "-1px", [h]: "-1px",
                width: "28px", height: "28px",
                borderTop: v === "top" ? "2px solid #C9A84C" : "none",
                borderBottom: v === "bottom" ? "2px solid #C9A84C" : "none",
                borderLeft: h === "left" ? "2px solid #C9A84C" : "none",
                borderRight: h === "right" ? "2px solid #C9A84C" : "none",
              }} />
            ))}

            <div style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A84C", textTransform: "uppercase", marginBottom: "32px" }}>
              ✦ Send A Message
            </div>

            {sent ? (
              <div style={{
                padding: "40px", textAlign: "center",
                border: "1px solid rgba(201,168,76,0.3)",
                background: "rgba(201,168,76,0.05)",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: "13px", letterSpacing: "2px", color: "#C9A84C", textTransform: "uppercase" }}>
                  Message Sent!
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
                  We'll get back to you within 24 hours
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "2px", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange}
                      onFocus={() => setFocused("firstName")} onBlur={() => setFocused("")}
                      placeholder="Your first name" style={inputStyle("firstName")} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "2px", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange}
                      onFocus={() => setFocused("lastName")} onBlur={() => setFocused("")}
                      placeholder="Your last name" style={inputStyle("lastName")} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "2px", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                    placeholder="+91 98765 43210" style={inputStyle("phone")} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "2px", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Email Address *</label>
                  <input name="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                    placeholder="your@email.com" style={inputStyle("email")} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "2px", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Event Type</label>
                  <select name="eventType" value={form.eventType} onChange={handleChange}
                    onFocus={() => setFocused("eventType")} onBlur={() => setFocused("")}
                    style={{ ...inputStyle("eventType"), cursor: "pointer" }}>
                    <option value="" style={{ background: "#0a0a0a" }}>Select event type…</option>
                    {["Wedding","Corporate Event","College Fest","Birthday Party","Photo Shoot","Other"].map(o => (
                      <option key={o} value={o} style={{ background: "#0a0a0a" }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "2px", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Your Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                    placeholder="Tell us about your event — date, venue, guest count, special requirements…"
                    rows={4} style={{ ...inputStyle("message"), resize: "vertical" }} />
                </div>
                <button onClick={handleSubmit} style={{
                  padding: "18px 0", width: "100%",
                  background: "linear-gradient(135deg,#C9A84C,#F5D98B,#C9A84C)",
                  backgroundSize: "200%",
                  border: "none", cursor: "pointer",
                  fontFamily: "'Cinzel',serif", fontSize: "11px",
                  letterSpacing: "4px", fontWeight: 700,
                  color: "#000", textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  position: "relative", overflow: "hidden",
                  animation: "shimmer 3s linear infinite",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,168,76,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  ✦ Send Message ✦
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes floatOrb  { 0%{transform:translateY(0) scale(1)} 100%{transform:translateY(-20px) scale(1.1)} }
        @media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
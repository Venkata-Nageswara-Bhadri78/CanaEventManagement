import { useState, useEffect, useRef } from "react";

// 🖼️ Replace with your actual gallery images from src/assets/images/gallery/
// import g1 from '../assets/images/gallery/g1.jpg'  ...etc
// Then in GALLERY_IMAGES: replace gradient with:  image: g1

const GALLERY_IMAGES = [
  { gradient: "linear-gradient(135deg,#1a0a00,#3d1500)", label: "Corporate Night" },
  { gradient: "linear-gradient(135deg,#001a1a,#003d3d)", label: "College Fest" },
  { gradient: "linear-gradient(135deg,#1a001a,#3d003d)", label: "Wedding Ceremony" },
  { gradient: "linear-gradient(135deg,#0a1a00,#1e3d00)", label: "Birthday Bash" },
  { gradient: "linear-gradient(135deg,#00001a,#00003d)", label: "Award Night" },
  { gradient: "linear-gradient(135deg,#1a0a0a,#3d1a1a)", label: "Product Launch" },
  { gradient: "linear-gradient(135deg,#0a0a1a,#1a1a3d)", label: "Photo Shoot" },
  { gradient: "linear-gradient(135deg,#1a1a00,#3d3d00)", label: "Cultural Event" },
];

const NAV_LINKS = ["Home","About Us","Services","Gallery","Enquiry","Contact Us"];
const SERVICES  = ["Wedding Planning","Corporate Events","College Fests","Birthday Events","Photo Shoots","Cultural Events"];

export default function Footer() {
  const [activeImg, setActiveImg] = useState(2); // center card active
  const [scrollY, setScrollY]     = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-rotate gallery active card every 4s
  useEffect(() => {
    const t = setInterval(() => {
      setActiveImg(p => (p + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── INSTAGRAM GALLERY SECTION ──────────────────────────── */}
      <section ref={sectionRef} style={{ background: "#030303", paddingTop: "100px", overflow: "hidden", position: "relative" }}>

        {/* Subtle top gradient */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px",
          background: "linear-gradient(to bottom, #030303, transparent)", zIndex: 2, pointerEvents: "none" }} />

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
            <span style={{ width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase" }}>
              📷 Our Portfolio
            </span>
            <span style={{ width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>
          <h2 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 900,
            fontSize: "clamp(26px,4vw,54px)", color: "#fff", lineHeight: 1.1,
          }}>
            Moments We've{" "}
            <span style={{
              background: "linear-gradient(90deg,#C9A84C,#F5D98B,#C9A84C)", backgroundSize: "200%",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}>Crafted</span>
          </h2>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginTop: "20px",
            padding: "12px 28px",
            background: "linear-gradient(135deg,#C9A84C,#F5D98B)",
            fontFamily: "'Cinzel',serif", fontSize: "10px",
            letterSpacing: "3px", textTransform: "uppercase",
            fontWeight: 700, color: "#000", textDecoration: "none",
            clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(201,168,76,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            📷 Follow Us On Instagram
          </a>
        </div>

        {/* Rotating gallery cards - cinema-strip layout */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "12px", padding: "0 0 60px 0",
          position: "relative", zIndex: 1,
          overflowX: "hidden",
        }}>
          {GALLERY_IMAGES.map((img, i) => {
            const isCenter  = i === activeImg;
            const isAdjacent = Math.abs(i - activeImg) === 1 || (activeImg === 0 && i === GALLERY_IMAGES.length - 1) || (activeImg === GALLERY_IMAGES.length - 1 && i === 0);
            const scale = isCenter ? 1.18 : isAdjacent ? 0.92 : 0.78;
            const opacity = isCenter ? 1 : isAdjacent ? 0.65 : 0.35;
            const zIndex = isCenter ? 10 : isAdjacent ? 5 : 1;

            return (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  flexShrink: 0,
                  width: isCenter ? "280px" : "200px",
                  height: isCenter ? "340px" : "260px",
                  background: img.gradient,
                  /* swap: backgroundImage: `url(${img.image})`, backgroundSize:"cover", backgroundPosition:"center" */
                  border: isCenter ? "2px solid rgba(201,168,76,0.7)" : "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer",
                  transform: `scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)",
                  boxShadow: isCenter ? "0 20px 60px rgba(201,168,76,0.3), 0 0 0 1px rgba(201,168,76,0.3)" : "none",
                  position: "relative",
                  display: "flex", alignItems: "flex-end",
                }}
              >
                {/* Image placeholder */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: "8px",
                }}>
                  <div style={{ fontSize: isCenter ? "36px" : "24px" }}>🎪</div>
                  <div style={{
                    fontFamily: "'Cinzel',serif", fontSize: "8px",
                    letterSpacing: "2px", color: "rgba(201,168,76,0.6)",
                    textTransform: "uppercase",
                  }}>{img.label}</div>
                  {isCenter && <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "11px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>← Add your photo</div>}
                </div>

                {/* Gradient overlay on bottom */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                }} />

                {/* Label */}
                <div style={{
                  position: "relative", zIndex: 1,
                  padding: "12px 14px",
                  fontFamily: "'Cinzel',serif", fontSize: "9px",
                  letterSpacing: "2px", color: isCenter ? "#C9A84C" : "rgba(255,255,255,0.4)",
                  textTransform: "uppercase", transition: "color 0.4s ease",
                  width: "100%",
                }}>{img.label}</div>

                {/* Active indicator dot */}
                {isCenter && (
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    width: "10px", height: "10px", borderRadius: "50%",
                    background: "#C9A84C",
                    boxShadow: "0 0 12px #C9A84C",
                    animation: "pulseGlow 1.5s ease infinite",
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", paddingBottom: "80px" }}>
          {GALLERY_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)} style={{
              width: i === activeImg ? "24px" : "8px", height: "8px",
              borderRadius: "4px", border: "none", cursor: "pointer",
              background: i === activeImg ? "linear-gradient(90deg,#C9A84C,#F5D98B)" : "rgba(255,255,255,0.15)",
              transition: "all 0.4s ease",
            }} />
          ))}
        </div>

        {/* Parent company banner */}
        <div style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          padding: "28px 24px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "24px",
          background: "rgba(201,168,76,0.02)",
        }}>
          <div style={{
            width: "64px", height: "64px", borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "24px",
            background: "rgba(201,168,76,0.05)",
          }}>🌟</div>
          <div style={{ borderLeft: "1px solid rgba(201,168,76,0.3)", paddingLeft: "24px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "13px", color: "rgba(255,255,255,0.4)", letterSpacing: "2px" }}>A Unit Of</div>
            <div style={{
              fontFamily: "'Cinzel',serif", fontWeight: 900,
              fontSize: "clamp(16px,2.5vw,28px)",
              background: "linear-gradient(90deg,#C9A84C,#F5D98B,#C9A84C)", backgroundSize: "200%",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
              letterSpacing: "2px",
            }}>CANA GROUP OF COMPANIES</div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ background: "#030303", borderTop: "1px solid rgba(201,168,76,0.12)", padding: "72px 24px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "48px", paddingBottom: "64px" }}
            className="footer-grid">

            {/* Brand column */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <div style={{
                  fontFamily: "'Cinzel',serif", fontSize: "28px", fontWeight: 900,
                  letterSpacing: "4px",
                  background: "linear-gradient(135deg,#C9A84C,#F5D98B,#C9A84C)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  display: "inline-block",
                  border: "1px solid rgba(201,168,76,0.3)",
                  padding: "8px 16px",
                }}>CANA</div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginTop: "4px" }}>
                  Event Management
                </div>
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
                fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.9, marginBottom: "28px",
              }}>
                Crafting extraordinary events with passion, precision and unmatched creativity since 2019.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {[["📸","Instagram"],["👤","Facebook"],["▶","YouTube"],["💬","WhatsApp"]].map(([icon, label]) => (
                  <a key={label} href="#" title={label} style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "15px", textDecoration: "none",
                    transition: "all 0.3s ease",
                    background: "rgba(201,168,76,0.03)",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.15)"; e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,168,76,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.transform = "none"; }}
                  >{icon}</a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A84C", textTransform: "uppercase", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                Navigation
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {NAV_LINKS.map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(" ","-")}`} style={{
                      fontFamily: "'Cormorant Garamond',serif", fontSize: "15px",
                      color: "rgba(255,255,255,0.45)", textDecoration: "none",
                      display: "flex", alignItems: "center", gap: "8px",
                      transition: "all 0.3s ease",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.paddingLeft = "6px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.paddingLeft = "0"; }}
                    >
                      <span style={{ width: "12px", height: "1px", background: "rgba(201,168,76,0.4)", flexShrink: 0 }} />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A84C", textTransform: "uppercase", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                Our Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {SERVICES.map(svc => (
                  <li key={svc}>
                    <a href="#services" style={{
                      fontFamily: "'Cormorant Garamond',serif", fontSize: "15px",
                      color: "rgba(255,255,255,0.45)", textDecoration: "none",
                      display: "flex", alignItems: "center", gap: "8px",
                      transition: "all 0.3s ease",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.paddingLeft = "6px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.paddingLeft = "0"; }}
                    >
                      <span style={{ width: "12px", height: "1px", background: "rgba(201,168,76,0.4)", flexShrink: 0 }} />
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "4px", color: "#C9A84C", textTransform: "uppercase", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                Contact Info
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: "📍", text: "No. 7A, Sundaramoorthy Street, Jafferkhanpet, Chennai – 600 083" },
                  { icon: "📞", text: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: "✉️", text: "hello@canaeventmanagement.in", href: "mailto:hello@canaeventmanagement.in" },
                ].map(({ icon, text, href }) => (
                  <div key={text} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "15px", flexShrink: 0, marginTop: "2px" }}>{icon}</span>
                    {href ? (
                      <a href={href} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none", lineHeight: 1.6, transition: "color 0.3s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                      >{text}</a>
                    ) : (
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(201,168,76,0.08)",
          padding: "20px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "12px",
          maxWidth: "1200px", margin: "0 auto",
        }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "13px", color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>
            © 2025 Cana Event Management. All rights reserved.
          </span>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: "9px", letterSpacing: "3px", color: "rgba(201,168,76,0.35)", textTransform: "uppercase" }}>
            Crafted with ✦ by Cana Dev Team
          </span>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulseGlow { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }
        @media(max-width:768px){
          .footer-grid{ grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:480px){
          .footer-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
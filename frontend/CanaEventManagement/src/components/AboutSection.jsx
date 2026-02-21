import { useState, useEffect, useRef } from "react";

// 🖼️ Replace these with your actual images from src/assets/images/
// import about1 from '../assets/images/about/about1.jpg'
// import about2 from '../assets/images/about/about2.jpg'
// import about3 from '../assets/images/about/about3.jpg'
// import about4 from '../assets/images/about/about4.jpg'
// import pageBg  from '../assets/images/about/bg.jpg'

// Placeholder gradients — swap with real image URLs once you have them
const ABOUT_IMAGES = [
  { gradient: "linear-gradient(135deg,#0d1f0d,#1a3a1a,#0a2a0a)", label: "Corporate Events" },
  { gradient: "linear-gradient(135deg,#1f0d14,#3a1a24,#2a0a18)", label: "Wedding Ceremonies" },
  { gradient: "linear-gradient(135deg,#0d0d1f,#1a1a3a,#0a0a2a)", label: "College Fests" },
  { gradient: "linear-gradient(135deg,#1f1a0d,#3a321a,#2a250a)", label: "Photo Shoots" },
];

const PILLARS = [
  { icon: "⚡", title: "Planning", desc: "Meticulous end-to-end event blueprints" },
  { icon: "💡", title: "Conception", desc: "Transforming raw ideas into vivid themes" },
  { icon: "🎯", title: "Execution", desc: "Flawless on-ground delivery, every time" },
  { icon: "🏆", title: "Production", desc: "World-class staging, lighting & sound" },
];

export default function AboutSection() {
  const [imgIndex, setImgIndex]     = useState(0);
  const [imgVisible, setImgVisible] = useState(true);
  const [scrollY, setScrollY]       = useState(0);
  const [inView, setInView]         = useState(false);
  const sectionRef = useRef(null);

  // Parallax scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Image rotation every 60 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setImgVisible(false);
      setTimeout(() => {
        setImgIndex(p => (p + 1) % ABOUT_IMAGES.length);
        setImgVisible(true);
      }, 700);
    }, 60000);
    return () => clearInterval(t);
  }, []);

  const parallaxOffset = scrollY * 0.25;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden"
      style={{ background: "#030303", paddingTop: "120px", paddingBottom: "120px" }}
    >

      {/* ── Parallax background texture ─────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          /* swap: backgroundImage: `url(${pageBg})` */
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, #0e1a0e 0%, #030303 70%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxOffset}px)`,
          opacity: 0.9,
        }}
      />

      {/* Gold grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Glowing orb top-left */}
      <div className="absolute pointer-events-none" style={{
        top: "-80px", left: "-80px", width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      {/* Glowing orb bottom-right */}
      <div className="absolute pointer-events-none" style={{
        bottom: "-80px", right: "-80px", width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div
          className="flex items-center gap-4 mb-4"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          <span style={{ display: "block", width: "40px", height: "1px", background: "#C9A84C" }} />
          <span style={{
            fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "6px",
            color: "#C9A84C", textTransform: "uppercase",
          }}>Our Story</span>
        </div>

        {/* Main heading */}
        <h2
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "clamp(32px,5vw,68px)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: "64px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s",
          }}
        >
          About <span style={{
            background: "linear-gradient(90deg,#C9A84C,#F5D98B,#C9A84C)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite",
          }}>Cana Events</span>
        </h2>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
          className="about-grid">

          {/* LEFT — Text content */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(15px,1.5vw,18px)",
                color: "#c8c8c8",
                lineHeight: 1.9,
                marginBottom: "24px",
                fontStyle: "italic",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s",
              }}
            >
              Cana Event Management is a premier event planning and production company rooted in South India. 
              Our innovation, creativity, and attention to detail transform every celebration into a 
              <span style={{ color: "#C9A84C", fontStyle: "normal", fontWeight: 600 }}> magical experience</span> — 
              be it grand or intimate.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(14px,1.4vw,17px)",
                color: "#9a9a9a",
                lineHeight: 1.9,
                marginBottom: "48px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.45s",
              }}
            >
              With international-standard hospitality and a team that breathes creativity, we turn your 
              most fragmented idea into a concrete, unforgettable reality. Every detail, every moment — 
              meticulously crafted just for you.
            </p>

            {/* Pillars grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "48px" }}>
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  style={{
                    padding: "20px",
                    border: "1px solid rgba(201,168,76,0.15)",
                    background: "rgba(201,168,76,0.03)",
                    position: "relative",
                    overflow: "hidden",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${0.5 + i * 0.1}s`,
                    cursor: "default",
                  }}
                  className="pillar-card"
                >
                  <div style={{ fontSize: "22px", marginBottom: "8px" }}>{p.icon}</div>
                  <div style={{
                    fontFamily: "'Cinzel',serif", fontSize: "12px",
                    letterSpacing: "2px", color: "#C9A84C",
                    textTransform: "uppercase", marginBottom: "6px",
                  }}>{p.title}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "13px", color: "#888", lineHeight: 1.6 }}>
                    {p.desc}
                  </div>
                  {/* hover glow corner */}
                  <div className="pillar-corner" style={{
                    position: "absolute", top: 0, right: 0,
                    width: "40px", height: "40px",
                    borderTop: "2px solid #C9A84C",
                    borderRight: "2px solid #C9A84C",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                fontFamily: "'Cinzel',serif", fontSize: "11px",
                letterSpacing: "3px", textTransform: "uppercase",
                color: "#000", fontWeight: 700,
                padding: "16px 36px",
                background: "linear-gradient(135deg,#C9A84C,#F5D98B,#C9A84C)",
                clipPath: "polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.9s",
                textDecoration: "none",
              }}
              className="about-btn"
            >
              Discover More <span style={{ fontSize: "16px" }}>→</span>
            </a>
          </div>

          {/* RIGHT — Image with decorative frame */}
          <div
            style={{
              position: "relative",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0) rotate(0deg)" : "translateX(40px) rotate(2deg)",
              transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.4s",
            }}
          >
            {/* Decorative corner frames */}
            <div style={{
              position: "absolute", top: "-16px", left: "-16px",
              width: "60px", height: "60px",
              borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C",
              zIndex: 2,
            }} />
            <div style={{
              position: "absolute", bottom: "-16px", right: "-16px",
              width: "60px", height: "60px",
              borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C",
              zIndex: 2,
            }} />

            {/* Rotating background accent */}
            <div
              style={{
                position: "absolute", top: "10%", left: "10%",
                right: "10%", bottom: "10%",
                border: "1px solid rgba(201,168,76,0.2)",
                animation: "rotateSlow 20s linear infinite",
                zIndex: 0,
              }}
            />

            {/* Main image */}
            <div
              style={{
                position: "relative", zIndex: 1,
                aspectRatio: "4/3",
                overflow: "hidden",
                background: ABOUT_IMAGES[imgIndex].gradient,
                transition: "opacity 0.7s ease",
                opacity: imgVisible ? 1 : 0,
              }}
            >
              {/* Swap with real image: <img src={aboutImages[imgIndex]} style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
              
              {/* Placeholder content */}
              <div style={{
                width: "100%", height: "100%",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                minHeight: "320px",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎪</div>
                <div style={{
                  fontFamily: "'Cinzel',serif", fontSize: "11px",
                  letterSpacing: "4px", color: "rgba(201,168,76,0.8)",
                  textTransform: "uppercase",
                }}>{ABOUT_IMAGES[imgIndex].label}</div>
                <div style={{
                  marginTop: "8px", fontFamily: "'Cormorant Garamond',serif",
                  color: "rgba(255,255,255,0.4)", fontSize: "12px",
                  fontStyle: "italic",
                }}>← Add your photo here</div>
              </div>

              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
              }} />

              {/* Image label badge */}
              <div style={{
                position: "absolute", bottom: "20px", left: "20px",
                fontFamily: "'Cinzel',serif", fontSize: "10px",
                letterSpacing: "3px", color: "#C9A84C",
                textTransform: "uppercase",
                background: "rgba(0,0,0,0.6)",
                padding: "6px 12px",
                border: "1px solid rgba(201,168,76,0.3)",
              }}>
                {ABOUT_IMAGES[imgIndex].label}
              </div>
            </div>

            {/* Image counter dots */}
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "16px" }}>
              {ABOUT_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setImgVisible(false); setTimeout(() => { setImgIndex(i); setImgVisible(true); }, 700); }}
                  style={{
                    width: i === imgIndex ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                    background: i === imgIndex
                      ? "linear-gradient(90deg,#C9A84C,#F5D98B)"
                      : "rgba(255,255,255,0.2)",
                    transition: "all 0.4s ease",
                  }}
                />
              ))}
            </div>

            {/* Floating tag */}
            <div style={{
              position: "absolute", top: "24px", right: "-20px",
              background: "linear-gradient(135deg,#C9A84C,#F5D98B)",
              padding: "10px 18px",
              fontFamily: "'Cinzel',serif", fontSize: "10px",
              fontWeight: 700, color: "#000",
              letterSpacing: "2px", textTransform: "uppercase",
              zIndex: 3,
              boxShadow: "0 8px 32px rgba(201,168,76,0.4)",
              animation: "floatTag 3s ease-in-out infinite",
            }}>
              Since 2019
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
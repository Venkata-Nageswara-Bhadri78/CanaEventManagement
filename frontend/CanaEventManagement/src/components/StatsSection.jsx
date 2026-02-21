import { useState, useEffect, useRef } from "react";

// 🖼️ Replace with your actual background image:
// import statsBg from '../assets/images/about/stats-bg.jpg'

const STATS = [
  { end: 500,  suffix: "+",  label: "Events Done",       icon: "🎪", desc: "Across India" },
  { end: 10,   suffix: "+",  label: "Years Experience",  icon: "⭐", desc: "Of Excellence" },
  { end: 1000, suffix: "+",  label: "Happy Clients",     icon: "🤝", desc: "& Counting" },
  { end: 50,   suffix: "+",  label: "Cities Covered",    icon: "🗺️", desc: "Pan India" },
];

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing: easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function StatCard({ stat, index, started }) {
  const count = useCountUp(stat.end, 2200, started);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "40px 32px",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.6)" : "rgba(255,255,255,0.12)"}`,
        background: hovered
          ? "rgba(201,168,76,0.06)"
          : "rgba(0,0,0,0.45)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        textAlign: "center",
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 20px 60px rgba(201,168,76,0.2), inset 0 1px 0 rgba(201,168,76,0.2)"
          : "0 4px 24px rgba(0,0,0,0.4)",
        opacity: started ? 1 : 0,
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      {/* Top-left corner accent */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "32px", height: "32px",
        borderTop: `2px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.4)"}`,
        borderLeft: `2px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.4)"}`,
        transition: "all 0.4s ease",
      }} />
      {/* Bottom-right corner accent */}
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: "32px", height: "32px",
        borderBottom: `2px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.4)"}`,
        borderRight: `2px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.4)"}`,
        transition: "all 0.4s ease",
      }} />

      {/* Icon */}
      <div style={{
        fontSize: "32px", marginBottom: "16px",
        transform: hovered ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        display: "block",
      }}>{stat.icon}</div>

      {/* Number */}
      <div style={{
        fontFamily: "'Cinzel',serif",
        fontSize: "clamp(40px,4vw,64px)",
        fontWeight: 900,
        lineHeight: 1,
        background: "linear-gradient(135deg,#C9A84C 0%,#F5D98B 50%,#C9A84C 100%)",
        backgroundSize: "200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "shimmer 2.5s linear infinite",
        marginBottom: "8px",
      }}>
        {count.toLocaleString()}{stat.suffix}
      </div>

      {/* Label */}
      <div style={{
        fontFamily: "'Cinzel',serif",
        fontSize: "11px",
        letterSpacing: "4px",
        color: "#fff",
        textTransform: "uppercase",
        marginBottom: "6px",
      }}>{stat.label}</div>

      {/* Sub-desc */}
      <div style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "13px",
        color: "rgba(201,168,76,0.6)",
        fontStyle: "italic",
        letterSpacing: "1px",
      }}>{stat.desc}</div>

      {/* Glow on hover */}
      {hovered && (
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      )}
    </div>
  );
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const [scrollY, setScrollY]   = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Parallax: the bg moves slower than scroll
  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const relativeScroll = scrollY - sectionTop;
  const parallaxOffset = relativeScroll * 0.35;

  return (
    <section
      ref={sectionRef}
      id="stats"
      style={{ position: "relative", overflow: "hidden", padding: "0", margin: "0" }}
    >
      {/* ── Full-bleed parallax background ──────────────────────── */}
      <div style={{
        position: "absolute", inset: "-20%",
        /* swap: backgroundImage: `url(${statsBg})`, */
        background: "linear-gradient(135deg, #0d0505 0%, #1a0808 30%, #240e0e 60%, #0d0505 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${parallaxOffset}px)`,
        transition: "transform 0.05s linear",
        zIndex: 0,
      }} />

      {/* Dark overlay for text legibility */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.65)",
        zIndex: 1,
      }} />

      {/* Animated scanlines */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
        opacity: 0.4,
      }} />

      {/* Gold horizontal beam top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, #C9A84C, #F5D98B, #C9A84C, transparent)",
        zIndex: 3,
      }} />
      {/* Gold horizontal beam bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, #C9A84C, #F5D98B, #C9A84C, transparent)",
        zIndex: 3,
      }} />

      <div style={{ position: "relative", zIndex: 4, padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Section header */}
          <div style={{
            textAlign: "center", marginBottom: "72px",
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <span style={{ display: "block", width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <span style={{
                fontFamily: "'Cinzel',serif", fontSize: "10px",
                letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase",
              }}>Our Numbers</span>
              <span style={{ display: "block", width: "60px", height: "1px", background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </div>
            <h2 style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(28px,4.5vw,58px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
            }}>
              The{" "}
              <span style={{
                background: "linear-gradient(90deg,#C9A84C,#F5D98B,#C9A84C)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}>Numbers</span>
              {" "}Speak
            </h2>
            <p style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(14px,1.5vw,18px)",
              color: "rgba(255,255,255,0.5)",
              fontStyle: "italic",
              marginTop: "12px",
              maxWidth: "480px",
              margin: "12px auto 0",
            }}>
              Every milestone is a story of trust, creativity, and flawless execution.
            </p>
          </div>

          {/* Stats grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}>
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} started={started} />
            ))}
          </div>

          {/* Bottom tagline */}
          <div style={{
            textAlign: "center", marginTop: "64px",
            opacity: started ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <span style={{ display: "block", flex: 1, maxWidth: "120px", height: "1px", background: "rgba(201,168,76,0.3)" }} />
              <span style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(13px,1.4vw,17px)",
                color: "rgba(255,255,255,0.4)",
                fontStyle: "italic",
                letterSpacing: "1px",
              }}>
                Trusted by Colleges, Corporates & Families across India
              </span>
              <span style={{ display: "block", flex: 1, maxWidth: "120px", height: "1px", background: "rgba(201,168,76,0.3)" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
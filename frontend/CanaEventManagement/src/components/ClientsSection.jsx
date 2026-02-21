import { useEffect, useRef, useState } from "react";

// 🖼️ Replace these with your real client logos from src/assets/images/clients/
// import logo1 from '../assets/images/clients/simats.png'
// Each client: { name, logo (optional), category }

const CLIENTS = [
  { name: "SIMATS",           cat: "College",    emoji: "🎓" },
  { name: "SSN Engineering",  cat: "College",    emoji: "🏛️" },
  { name: "Bosch",            cat: "Corporate",  emoji: "⚙️" },
  { name: "L&T",              cat: "Corporate",  emoji: "🏗️" },
  { name: "Ramco",            cat: "Corporate",  emoji: "🏭" },
  { name: "Amazon",           cat: "Corporate",  emoji: "📦" },
  { name: "Nissan",           cat: "Corporate",  emoji: "🚗" },
  { name: "VIT University",   cat: "College",    emoji: "🎓" },
  { name: "Anna University",  cat: "College",    emoji: "🏫" },
  { name: "Vel Tech",         cat: "College",    emoji: "🎓" },
  { name: "CSIR-CLRI",        cat: "Research",   emoji: "🔬" },
  { name: "Sathyabama",       cat: "College",    emoji: "🎓" },
  { name: "Madha Engg",       cat: "College",    emoji: "🏫" },
  { name: "Kubota",           cat: "Corporate",  emoji: "🌾" },
  { name: "Chennai IT",       cat: "College",    emoji: "💻" },
  { name: "Saveetha Univ",    cat: "College",    emoji: "🎓" },
];

const SUCCESS_EVENTS = [
  { icon: "💍", title: "Royal Wedding",      loc: "Chennai Palace Grounds",  year: "2024", tag: "Wedding" },
  { icon: "🎓", title: "AEGON Fest 2024",    loc: "Saveetha Engineering",    year: "2024", tag: "College Fest" },
  { icon: "🏢", title: "Annual Corp Gala",   loc: "ITC Grand Chola",         year: "2023", tag: "Corporate" },
  { icon: "📸", title: "Fashion Shoot",      loc: "ECR Beachfront Studio",   year: "2024", tag: "Photo Shoot" },
  { icon: "🎂", title: "Grand 50th B'day",   loc: "Leela Palace Chennai",    year: "2024", tag: "Birthday" },
  { icon: "🚀", title: "Product Launch",     loc: "World Trade Centre",      year: "2023", tag: "Corporate" },
];

export default function ClientsSection() {
  const [inView, setInView]       = useState(false);
  const [paused, setPaused]       = useState(false);
  const [activeTab, setActiveTab] = useState("clients");
  const [scrollY, setScrollY]     = useState(0);
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

  const pOffset = ((sectionRef.current?.offsetTop ?? 0) - scrollY) * -0.15;

  // Duplicate for infinite scroll
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <section ref={sectionRef} id="clients" style={{ position: "relative", overflow: "hidden", background: "#030303", padding: "120px 0" }}>

      {/* Parallax mesh bg */}
      <div style={{
        position: "absolute", inset: "-10%",
        background: "radial-gradient(ellipse 80% 60% at 20% 60%, #0a0e1a 0%, #030303 60%), radial-gradient(ellipse 60% 40% at 80% 20%, #1a0e0a 0%, transparent 60%)",
        transform: `translateY(${pOffset}px)`, zIndex: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Gold beam top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, transparent, #C9A84C, #F5D98B, #C9A84C, transparent)", zIndex: 2 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px",
            opacity: inView ? 1 : 0, transition: "all 0.8s ease 0.1s" }}>
            <span style={{ width: "50px", height: "1px", background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase" }}>Trust & Legacy</span>
            <span style={{ width: "50px", height: "1px", background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>
          <h2 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 900,
            fontSize: "clamp(28px,4.5vw,60px)", color: "#fff", lineHeight: 1.1,
            opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s ease 0.2s",
          }}>
            Who{" "}
            <span style={{
              background: "linear-gradient(90deg,#C9A84C,#F5D98B,#C9A84C)", backgroundSize: "200%",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}>Trusts Us</span>
          </h2>

          {/* Tab switcher */}
          <div style={{
            display: "inline-flex", gap: "4px", marginTop: "32px",
            padding: "4px", border: "1px solid rgba(201,168,76,0.2)",
            background: "rgba(0,0,0,0.4)",
            opacity: inView ? 1 : 0, transition: "all 0.8s ease 0.4s",
          }}>
            {[["clients","Our Clients"],["events","Success Events"]].map(([key,label]) => (
              <button key={key} onClick={() => setActiveTab(key)} style={{
                padding: "10px 28px",
                fontFamily: "'Cinzel',serif", fontSize: "10px",
                letterSpacing: "3px", textTransform: "uppercase",
                border: "none", cursor: "pointer",
                background: activeTab === key ? "linear-gradient(135deg,#C9A84C,#F5D98B)" : "transparent",
                color: activeTab === key ? "#000" : "rgba(255,255,255,0.4)",
                fontWeight: activeTab === key ? 700 : 400,
                transition: "all 0.3s ease",
              }}>{label}</button>
            ))}
          </div>
        </div>

        {/* ── CLIENTS TAB ── */}
        {activeTab === "clients" && (
          <div>
            {/* Marquee row 1 — left to right */}
            <div style={{ overflow: "hidden", marginBottom: "20px", position: "relative" }}
              onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div style={{ display: "flex", gap: "16px", animation: `marqueeLeft 30s linear infinite ${paused ? "paused" : "running"}`, width: "max-content" }}>
                {marqueeItems.map((c, i) => (
                  <ClientCard key={i} client={c} />
                ))}
              </div>
              {/* Edge fades */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "80px", height: "100%",
                background: "linear-gradient(to right, #030303, transparent)", pointerEvents: "none", zIndex: 2 }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "100%",
                background: "linear-gradient(to left, #030303, transparent)", pointerEvents: "none", zIndex: 2 }} />
            </div>

            {/* Marquee row 2 — right to left */}
            <div style={{ overflow: "hidden", position: "relative" }}
              onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div style={{ display: "flex", gap: "16px", animation: `marqueeRight 35s linear infinite ${paused ? "paused" : "running"}`, width: "max-content" }}>
                {[...marqueeItems].reverse().map((c, i) => (
                  <ClientCard key={i} client={c} />
                ))}
              </div>
              <div style={{ position: "absolute", top: 0, left: 0, width: "80px", height: "100%",
                background: "linear-gradient(to right, #030303, transparent)", pointerEvents: "none", zIndex: 2 }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "100%",
                background: "linear-gradient(to left, #030303, transparent)", pointerEvents: "none", zIndex: 2 }} />
            </div>

            {/* Tagline */}
            <p style={{
              textAlign: "center", marginTop: "48px",
              fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
              fontSize: "clamp(14px,1.4vw,17px)", color: "rgba(255,255,255,0.3)",
              opacity: inView ? 1 : 0, transition: "opacity 1s ease 0.8s",
            }}>Trusted by 300+ organisations across Tamil Nadu & beyond</p>
          </div>
        )}

        {/* ── SUCCESS EVENTS TAB ── */}
        {activeTab === "events" && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}>
            {SUCCESS_EVENTS.map((ev, i) => (
              <EventCard key={i} ev={ev} i={i} inView={inView} />
            ))}
          </div>
        )}

      </div>

      <style>{`
        @keyframes marqueeLeft  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes shimmer      { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes cardGlow     { 0%,100%{box-shadow:0 0 0 rgba(201,168,76,0)} 50%{box-shadow:0 0 30px rgba(201,168,76,0.15)} }
      `}</style>
    </section>
  );
}

function ClientCard({ client }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        minWidth: "180px", padding: "20px 28px",
        border: hov ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.07)",
        background: hov ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.02)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        cursor: "default", flexShrink: 0,
        transition: "all 0.35s ease",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 12px 40px rgba(201,168,76,0.15)" : "none",
        position: "relative",
      }}
    >
      {/* Corner accent */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "14px", height: "14px",
        borderTop: `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
        borderLeft: `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
        transition: "all 0.3s ease" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "14px", height: "14px",
        borderBottom: `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
        borderRight: `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
        transition: "all 0.3s ease" }} />

      {/* Logo placeholder — swap with <img src={client.logo} /> */}
      <div style={{
        fontSize: "28px",
        filter: hov ? "drop-shadow(0 0 8px rgba(201,168,76,0.5))" : "none",
        transition: "filter 0.3s ease",
      }}>{client.emoji}</div>

      <div style={{
        fontFamily: "'Cinzel',serif", fontSize: "10px",
        letterSpacing: "1.5px", textTransform: "uppercase",
        color: hov ? "#fff" : "rgba(255,255,255,0.6)",
        textAlign: "center", transition: "color 0.3s ease",
        fontWeight: hov ? 600 : 400,
      }}>{client.name}</div>

      <div style={{
        fontFamily: "'Cormorant Garamond',serif", fontSize: "11px",
        fontStyle: "italic", color: "rgba(201,168,76,0.5)",
      }}>{client.cat}</div>
    </div>
  );
}

function EventCard({ ev, i, inView }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "32px 28px",
        border: hov ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.07)",
        background: hov ? "rgba(201,168,76,0.05)" : "rgba(255,255,255,0.02)",
        position: "relative",
        opacity: inView ? 1 : 0,
        transform: inView ? (hov ? "translateY(-6px)" : "translateY(0)") : "translateY(24px)",
        transition: `all 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`,
        boxShadow: hov ? "0 16px 48px rgba(201,168,76,0.12)" : "none",
        cursor: "default",
      }}
    >
      {/* Tag badge */}
      <div style={{
        position: "absolute", top: "16px", right: "16px",
        padding: "4px 10px",
        background: "rgba(201,168,76,0.12)",
        border: "1px solid rgba(201,168,76,0.2)",
        fontFamily: "'Cinzel',serif", fontSize: "8px",
        letterSpacing: "2px", color: "#C9A84C",
        textTransform: "uppercase",
      }}>{ev.tag}</div>

      <div style={{ fontSize: "36px", marginBottom: "14px", filter: hov ? "drop-shadow(0 0 12px rgba(201,168,76,0.6))" : "none", transition: "filter 0.3s ease" }}>
        {ev.icon}
      </div>
      <div style={{
        fontFamily: "'Cinzel',serif", fontSize: "13px", fontWeight: 700,
        color: "#fff", letterSpacing: "1px", marginBottom: "8px",
      }}>{ev.title}</div>
      <div style={{
        fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
        fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "4px",
      }}>📍 {ev.loc}</div>
      <div style={{
        fontFamily: "'Cinzel',serif", fontSize: "10px",
        letterSpacing: "2px", color: "rgba(201,168,76,0.5)",
      }}>{ev.year}</div>

      {/* Corner accents */}
      {[["top","left"],["bottom","right"]].map(([v,h]) => (
        <div key={`${v}${h}`} style={{
          position: "absolute", [v]: 0, [h]: 0,
          width: "18px", height: "18px",
          borderTop: v === "top" ? `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}` : "none",
          borderBottom: v === "bottom" ? `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}` : "none",
          borderLeft: h === "left" ? `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}` : "none",
          borderRight: h === "right" ? `1px solid ${hov ? "#C9A84C" : "rgba(201,168,76,0.3)"}` : "none",
          transition: "all 0.3s ease",
        }} />
      ))}
    </div>
  );
}
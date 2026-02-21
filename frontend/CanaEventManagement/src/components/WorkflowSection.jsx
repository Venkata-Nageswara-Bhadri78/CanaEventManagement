import { useState, useEffect, useRef } from "react";

const STEPS = [
  { id: 1, icon: "🔍", title: "Discovery",    desc: "We deep-dive into your vision, goals, budget and timeline to craft a crystal-clear event blueprint.",      color: "#C9A84C" },
  { id: 2, icon: "💡", title: "Conception",   desc: "Our creative team transforms your ideas into immersive themes, mood boards, and conceptual designs.",      color: "#F5D98B" },
  { id: 3, icon: "📋", title: "Planning",     desc: "Every detail — venue, vendors, logistics, staffing — is meticulously scheduled and coordinated.",          color: "#C9A84C" },
  { id: 4, icon: "🎭", title: "Production",   desc: "Stage builds, lighting rigs, AV setups, and décor installations brought to life by our expert crew.",      color: "#F5D98B" },
  { id: 5, icon: "🚀", title: "Execution",    desc: "Flawless on-ground delivery. Our team is present at every moment ensuring zero hiccups.",                  color: "#C9A84C" },
  { id: 6, icon: "✨", title: "Legacy",       desc: "Post-event reviews, memories captured, and a lasting relationship built for your next celebration.",        color: "#F5D98B" },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView]         = useState(false);
  const [scrollY, setScrollY]       = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

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

  // Auto-cycle active step
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep(p => (p + 1) % STEPS.length);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStepClick = (i) => {
    setActiveStep(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setActiveStep(p => (p + 1) % STEPS.length), 2500);
  };

  const parallax = (sectionRef.current?.offsetTop ?? 0);
  const pOffset = (scrollY - parallax) * 0.2;

  return (
    <section ref={sectionRef} id="workflow" style={{ position: "relative", overflow: "hidden", background: "#050505", padding: "120px 0" }}>

      {/* Parallax radial bg */}
      <div style={{
        position: "absolute", inset: "-10%",
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, #1a1200 0%, #050505 70%)",
        transform: `translateY(${pOffset}px)`,
        zIndex: 0,
      }} />

      {/* Animated grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Centre glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
        animation: "pulseGlow 4s ease-in-out infinite",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px",
            opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.1s" }}>
            <span style={{ width: "50px", height: "1px", background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase" }}>How We Work</span>
            <span style={{ width: "50px", height: "1px", background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>
          <h2 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 900,
            fontSize: "clamp(30px,5vw,64px)", color: "#fff", lineHeight: 1.1,
            opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s ease 0.2s",
          }}>
            Our{" "}
            <span style={{
              background: "linear-gradient(90deg,#C9A84C,#F5D98B,#C9A84C)", backgroundSize: "200%",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}>Workflow</span>
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
            fontSize: "clamp(14px,1.5vw,18px)", color: "rgba(255,255,255,0.45)", marginTop: "14px",
            opacity: inView ? 1 : 0, transition: "all 0.8s ease 0.3s",
          }}>Six precise steps that turn your dream into an unforgettable reality</p>
        </div>

        {/* Step nodes row */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: "0", marginBottom: "64px", flexWrap: "wrap" }}>

          {STEPS.map((step, i) => {
            const isActive = activeStep === i;
            const isPast   = i < activeStep;
            return (
              <div key={step.id} style={{ display: "flex", alignItems: "center" }}>

                {/* Node */}
                <div
                  onClick={() => handleStepClick(i)}
                  style={{
                    position: "relative", cursor: "pointer",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.8)",
                    transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1 + 0.3}s`,
                  }}
                >
                  {/* Outer glow ring (active only) */}
                  {isActive && (
                    <div style={{
                      position: "absolute", inset: "-12px", borderRadius: "50%",
                      border: "1px solid rgba(201,168,76,0.3)",
                      animation: "rippleRing 1.5s ease-out infinite",
                    }} />
                  )}
                  {isActive && (
                    <div style={{
                      position: "absolute", inset: "-24px", borderRadius: "50%",
                      border: "1px solid rgba(201,168,76,0.15)",
                      animation: "rippleRing 1.5s ease-out infinite 0.3s",
                    }} />
                  )}

                  {/* Circle */}
                  <div style={{
                    width: isActive ? "100px" : "80px",
                    height: isActive ? "100px" : "80px",
                    borderRadius: "50%",
                    border: isActive ? "2px solid #C9A84C" : isPast ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.15)",
                    background: isActive
                      ? "radial-gradient(circle at 35% 35%, rgba(201,168,76,0.25), rgba(201,168,76,0.05))"
                      : isPast
                        ? "rgba(201,168,76,0.08)"
                        : "rgba(255,255,255,0.03)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: "4px",
                    transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                    boxShadow: isActive ? "0 0 40px rgba(201,168,76,0.35), inset 0 0 20px rgba(201,168,76,0.1)" : "none",
                    position: "relative",
                  }}>
                    {/* Step number badge */}
                    <div style={{
                      position: "absolute", top: "-8px", right: "-4px",
                      width: "22px", height: "22px", borderRadius: "50%",
                      background: isActive ? "linear-gradient(135deg,#C9A84C,#F5D98B)" : "rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Cinzel',serif", fontSize: "9px", fontWeight: 700,
                      color: isActive ? "#000" : "rgba(255,255,255,0.4)",
                      transition: "all 0.4s ease",
                    }}>{step.id}</div>

                    <span style={{ fontSize: isActive ? "28px" : "22px", transition: "font-size 0.4s ease", filter: isActive ? "drop-shadow(0 0 8px rgba(201,168,76,0.6))" : "none" }}>
                      {step.icon}
                    </span>
                    <span style={{
                      fontFamily: "'Cinzel',serif", fontSize: "8px",
                      letterSpacing: "1.5px", textTransform: "uppercase",
                      color: isActive ? "#C9A84C" : isPast ? "rgba(201,168,76,0.6)" : "rgba(255,255,255,0.3)",
                      transition: "color 0.4s ease",
                    }}>{step.title}</span>
                  </div>
                </div>

                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div style={{ position: "relative", width: "clamp(20px,4vw,60px)", height: "2px", margin: "0 4px" }}>
                    <div style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.08)" }} />
                    <div style={{
                      position: "absolute", top: 0, left: 0, height: "100%",
                      width: i < activeStep ? "100%" : "0%",
                      background: "linear-gradient(to right, #C9A84C, #F5D98B)",
                      transition: "width 0.6s ease",
                      boxShadow: "0 0 8px rgba(201,168,76,0.5)",
                    }} />
                    {/* Moving dot */}
                    {i === activeStep - 1 && (
                      <div style={{
                        position: "absolute", top: "50%", right: 0,
                        transform: "translate(50%,-50%)",
                        width: "8px", height: "8px", borderRadius: "50%",
                        background: "#F5D98B",
                        boxShadow: "0 0 12px #C9A84C",
                        animation: "pulseGlow 1s ease infinite",
                      }} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active step detail card */}
        <div style={{
          maxWidth: "640px", margin: "0 auto",
          padding: "40px 48px",
          border: "1px solid rgba(201,168,76,0.25)",
          background: "rgba(201,168,76,0.04)",
          backdropFilter: "blur(16px)",
          position: "relative",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.8s ease 0.8s",
        }}>
          {/* Corner accents */}
          {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h]) => (
            <div key={`${v}${h}`} style={{
              position: "absolute", [v]: "-1px", [h]: "-1px",
              width: "20px", height: "20px",
              borderTop: v === "top" ? "2px solid #C9A84C" : "none",
              borderBottom: v === "bottom" ? "2px solid #C9A84C" : "none",
              borderLeft: h === "left" ? "2px solid #C9A84C" : "none",
              borderRight: h === "right" ? "2px solid #C9A84C" : "none",
            }} />
          ))}

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px", filter: "drop-shadow(0 0 16px rgba(201,168,76,0.5))" }}>
              {STEPS[activeStep].icon}
            </div>
            <div style={{
              fontFamily: "'Cinzel',serif", fontSize: "11px",
              letterSpacing: "5px", color: "#C9A84C",
              textTransform: "uppercase", marginBottom: "12px",
            }}>Step {STEPS[activeStep].id} — {STEPS[activeStep].title}</div>
            <p style={{
              fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
              fontSize: "clamp(15px,1.5vw,18px)", color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
            }}>{STEPS[activeStep].desc}</p>
          </div>
        </div>

        {/* Step selector dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
          {STEPS.map((_, i) => (
            <button key={i} onClick={() => handleStepClick(i)} style={{
              width: activeStep === i ? "28px" : "8px", height: "8px",
              borderRadius: "4px", border: "none", cursor: "pointer",
              background: activeStep === i ? "linear-gradient(90deg,#C9A84C,#F5D98B)" : "rgba(255,255,255,0.15)",
              transition: "all 0.4s ease",
            }} />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes rippleRing { 0% { transform:scale(1); opacity:0.6; } 100% { transform:scale(1.6); opacity:0; } }
        @keyframes pulseGlow  { 0%,100% { opacity:0.6; } 50% { opacity:1; } }
        @keyframes shimmer    { 0%{background-position:-200% center} 100%{background-position:200% center} }
      `}</style>
    </section>
  );
}
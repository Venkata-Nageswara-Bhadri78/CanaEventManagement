import { useState, useEffect, useRef } from "react";

// ── Replace these with your actual imported images ──────────────────────────
// import hero1 from '../assets/images/hero/hero1.jpg'
// import hero2 from '../assets/images/hero/hero2.jpg'
// ...
// For now we use gradient placeholders so you can see the layout immediately.
const SLIDES = [
  {
    // image: hero1,          ← swap in when you have real photos
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 40%, #2d1200 100%)",
    overlay: "rgba(0,0,0,0.45)",
  },
  {
    gradient: "linear-gradient(135deg, #0a0000 0%, #200010 40%, #3d0020 100%)",
    overlay: "rgba(0,0,0,0.50)",
  },
  {
    gradient: "linear-gradient(135deg, #000a0a 0%, #001520 40%, #002540 100%)",
    overlay: "rgba(0,0,0,0.48)",
  },
  {
    gradient: "linear-gradient(135deg, #0a0800 0%, #1a1200 40%, #2d2000 100%)",
    overlay: "rgba(0,0,0,0.45)",
  },
  {
    gradient: "linear-gradient(135deg, #050010 0%, #0d0030 40%, #1a0050 100%)",
    overlay: "rgba(0,0,0,0.50)",
  },
];

const TITLES = [
  "Cana Event Management",
  "Marriage Events",
  "Corporate Events",
  "Birthday Events",
  "College Events",
  "Photo Shoots",
  "One Stop Solution",
];

const SUBTITLE =
  "We craft extraordinary celebrations that transform your vision into unforgettable experiences across South India.";

// How long each title stays (ms) — titles cycle faster than slides
const TITLE_DURATION = 3000;
// How long each slide stays (ms)
const SLIDE_DURATION = 5000;

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0); // 0-100

  const slideTimer = useRef(null);
  const titleTimer = useRef(null);
  const progressTimer = useRef(null);

  // ── Slide cycling ───────────────────────────────────────────────────────
  useEffect(() => {
    startProgress();
    slideTimer.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length);
      startProgress();
    }, SLIDE_DURATION);
    return () => {
      clearInterval(slideTimer.current);
      clearInterval(progressTimer.current);
    };
  }, []);

  function startProgress() {
    setSlideProgress(0);
    clearInterval(progressTimer.current);
    const step = 100 / (SLIDE_DURATION / 50);
    progressTimer.current = setInterval(() => {
      setSlideProgress((p) => {
        if (p >= 100) { clearInterval(progressTimer.current); return 100; }
        return p + step;
      });
    }, 50);
  }

  // ── Title cycling with fade ─────────────────────────────────────────────
  useEffect(() => {
    titleTimer.current = setInterval(() => {
      // fade out
      setTitleVisible(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setTitleVisible(true);
      }, 600);
    }, TITLE_DURATION);
    return () => clearInterval(titleTimer.current);
  }, []);

  const goToSlide = (idx) => {
    setSlideIndex(idx);
    clearInterval(slideTimer.current);
    startProgress();
    slideTimer.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length);
      startProgress();
    }, SLIDE_DURATION);
  };

  const slide = SLIDES[slideIndex];

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @keyframes kenBurns {
          0%   { transform: scale(1.05) translateX(0px); }
          100% { transform: scale(1.12) translateX(-20px); }
        }
        @keyframes titleSlideUp {
          0%   { opacity: 0; transform: translateY(30px) skewY(1deg); }
          100% { opacity: 1; transform: translateY(0px) skewY(0deg); }
        }
        @keyframes titleSlideDown {
          0%   { opacity: 1; transform: translateY(0px); }
          100% { opacity: 0; transform: translateY(-30px); }
        }
        @keyframes fadeInUp {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        @keyframes socialFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .title-enter {
          animation: titleSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .title-exit {
          animation: titleSlideDown 0.5s ease-in forwards;
        }
        .gold-shimmer {
          background: linear-gradient(90deg, #C9A84C 0%, #F5D98B 30%, #fff8dc 50%, #F5D98B 70%, #C9A84C 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .slide-bg {
          animation: kenBurns 6s ease-in-out infinite alternate;
        }
        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .cta-btn:hover::before { left: 100%; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(201,168,76,0.4); }
      `}</style>

      <section id="home" className="relative w-full h-screen overflow-hidden">

        {/* ── Background slides ─────────────────────────────────────────── */}
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slideIndex ? 1 : 0, zIndex: 0 }}
          >
            {/* Swap: replace style with: backgroundImage: `url(${s.image})` */}
            <div
              className="w-full h-full slide-bg"
              style={{
                background: s.gradient,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0" style={{ background: s.overlay }} />
          </div>
        ))}

        {/* ── Decorative grain texture ──────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        {/* ── Gold diagonal accent line ─────────────────────────────────── */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: 0, left: "50%",
            width: "1px", height: "120px",
            background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
            opacity: 0.6,
          }}
        />

        {/* ── Social icons (left side) ──────────────────────────────────── */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5">
          {[
            { icon: "📸", label: "Instagram", href: "#" },
            { icon: "👤", label: "Facebook", href: "#" },
            { icon: "▶️", label: "YouTube", href: "#" },
          ].map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-amber-400/40 text-amber-400 text-sm hover:bg-amber-400 hover:text-black transition-all duration-300"
              style={{ animation: `socialFloat ${2 + i * 0.4}s ease-in-out infinite` }}
            >
              {s.icon}
            </a>
          ))}
          <div className="w-px h-16 bg-gradient-to-b from-amber-400/60 to-transparent mx-auto" />
        </div>

        {/* ── Main content ──────────────────────────────────────────────── */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">

          {/* Eyebrow label */}
          <div
            className="mb-6 flex items-center gap-3"
            style={{ animation: "fadeInUp 1s ease 0.2s both" }}
          >
            <span className="block w-12 h-px bg-amber-400/60" />
            <span
              className="text-amber-400 text-xs tracking-[6px] uppercase font-medium"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Premium Events
            </span>
            <span className="block w-12 h-px bg-amber-400/60" />
          </div>

          {/* Animated Title */}
          <div className="overflow-hidden mb-6" style={{ minHeight: "clamp(60px, 10vw, 120px)" }}>
            <h1
              key={titleIndex}
              className={`font-black uppercase leading-none tracking-tight gold-shimmer ${
                titleVisible ? "title-enter" : "title-exit"
              }`}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(28px, 6vw, 86px)",
                lineHeight: 1.1,
              }}
            >
              {TITLES[titleIndex]}
            </h1>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 mb-6" style={{ animation: "fadeInUp 1s ease 0.5s both" }}>
            <span className="block w-16 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-400 text-lg">✦</span>
            <span className="block w-16 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          {/* Subtitle */}
          <p
            className="text-gray-300 max-w-2xl leading-relaxed mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(14px, 2vw, 20px)",
              fontStyle: "italic",
              animation: "fadeInUp 1s ease 0.6s both",
            }}
          >
            {SUBTITLE}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ animation: "fadeInUp 1s ease 0.8s both" }}
          >
            <a
              href="tel:+919876543210"
              className="cta-btn px-8 py-4 text-black text-sm font-bold tracking-[3px] uppercase"
              style={{
                fontFamily: "'Cinzel', serif",
                background: "linear-gradient(135deg, #C9A84C 0%, #F5D98B 50%, #C9A84C 100%)",
                clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
              }}
            >
              📞 Call Us Now
            </a>
            <a
              href="#enquiry"
              className="cta-btn px-8 py-4 text-amber-400 text-sm font-bold tracking-[3px] uppercase border border-amber-400/60 hover:border-amber-400"
              style={{
                fontFamily: "'Cinzel', serif",
                clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
              }}
            >
              Book an Event
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-12"
            style={{ animation: "fadeInUp 1s ease 1s both" }}
          >
            {[
              { num: "500+", label: "Events Done" },
              { num: "5+", label: "Years Experience" },
              { num: "300+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-black gold-shimmer"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {stat.num}
                </div>
                <div className="text-gray-400 text-xs tracking-[3px] uppercase mt-1" style={{ fontFamily: "'Cinzel', serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Slide indicators (bottom center) ─────────────────────────── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          {/* Progress bar for current slide */}
          <div className="w-48 h-px bg-white/20 overflow-hidden rounded-full">
            <div
              className="h-full bg-amber-400 transition-none rounded-full"
              style={{ width: `${slideProgress}%` }}
            />
          </div>

          {/* Dot indicators */}
          <div className="flex gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === slideIndex ? "28px" : "8px",
                  height: "8px",
                  background: i === slideIndex
                    ? "linear-gradient(90deg, #C9A84C, #F5D98B)"
                    : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          {/* Slide counter */}
          <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
            {String(slideIndex + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* ── Scroll hint ───────────────────────────────────────────────── */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 opacity-50">
          <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
            <div
              className="w-1 h-2 bg-amber-400 rounded-full"
              style={{ animation: "socialFloat 1.5s ease-in-out infinite" }}
            />
          </div>
          <span className="text-white/50 text-[9px] tracking-[3px] uppercase rotate-90 mt-2"
            style={{ fontFamily: "'Cinzel', serif" }}>Scroll</span>
        </div>

      </section>
    </>
  );
}
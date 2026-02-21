import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Enquiry", href: "#enquiry" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-[0_2px_30px_rgba(201,168,76,0.15)]"
          : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight group">
          <span
            className="text-2xl font-black tracking-widest uppercase"
            style={{
              fontFamily: "'Cinzel', serif",
              background: "linear-gradient(135deg, #C9A84C 0%, #F5D98B 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          >
            CANA
          </span>
          <span className="text-white text-[10px] tracking-[4px] uppercase font-light opacity-80 group-hover:opacity-100 transition-opacity">
            Event Management
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 relative group ${
                  active === link.label ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
                }`}
                style={{ fontFamily: "'Cinzel', serif", fontSize: "11px" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-amber-400 transition-all duration-300 ${
                    active === link.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="tel:+919876543210"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold text-black transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #F5D98B 50%, #C9A84C 100%)",
            fontFamily: "'Cinzel', serif",
            clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
          }}
        >
          📞 Call Us
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden bg-black/98 backdrop-blur-xl border-t border-amber-400/20 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => { setActive(link.label); setMenuOpen(false); }}
                className="text-gray-300 hover:text-amber-400 transition-colors text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', serif", fontSize: "11px" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+919876543210" className="text-amber-400 text-sm font-semibold tracking-widest">
              📞 Call Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

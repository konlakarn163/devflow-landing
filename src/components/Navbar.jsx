import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Platform", href: "#features" },
  { label: "Workflow", href: "#howitworks" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
  { label: "Customers", href: "#testimonials" },
];

const SCROLL_THRESHOLD = 80;

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Initial entrance only — no GSAP on scroll to avoid jank
    gsap.fromTo(
      navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15 },
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color,box-shadow] duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`flex items-center h-16 transition-all duration-500 ${
            scrolled ? "justify-center gap-2" : "gap-4"
          }`}
        >
          {/* Logo — shrinks to icon only when scrolled */}
          <a
            href="#"
            className="flex items-center gap-2 shrink-0 overflow-hidden"
          >
            <div
              className="flex items-center justify-center shadow-md shrink-0"
              style={{
                width: scrolled ? "34px" : "32px",
                height: scrolled ? "34px" : "32px",
                borderRadius: scrolled ? "50%" : "10px",
                background: scrolled
                  ? "#111"
                  : "linear-gradient(135deg, #a855f7, #ec4899)",
                transition:
                  "width 0.45s cubic-bezier(0.4,0,0.2,1), height 0.45s cubic-bezier(0.4,0,0.2,1), border-radius 0.45s cubic-bezier(0.4,0,0.2,1), background 0.45s ease",
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M9 3l-6 9h5l-2 9 14-12h-6l3-6z" />
              </svg>
            </div>
            <span
              className="font-extrabold text-black text-[15px] tracking-[0.15em] uppercase whitespace-nowrap overflow-hidden"
              style={{
                width: scrolled ? "0px" : "90px",
                opacity: scrolled ? 0 : 1,
                transition:
                  "width 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
              }}
            >
              DevFlow
            </span>
          </a>

          {/* Pill */}
          <div className={`hidden md:flex ${!scrolled ? 'flex-1 justify-center' : ''}`}>
            <div
              className={`flex items-center p-1 shadow-lg gap-0.5 ${
                scrolled ? "nav-pill-scrolled" : "nav-pill"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-pill-link rounded-2xl flex items-center gap-1.5 ${link.active ? "active" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg "
              style={{
                background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                border: "1px solid rgba(168,85,247,0.45)",
                boxShadow: scrolled
                  ? "0 10px 30px rgba(124,58,237,0.25)"
                  : "0 10px 24px rgba(168,85,247,0.18)",
              }}
            >
              Book a demo
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-white/70 hover:text-white" : "text-gray-700 hover:text-gray-900"}`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden rounded-2xl mb-3 p-4 space-y-1 border border-purple-500/20"
            style={{
              background: "rgba(10,9,18,0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 py-2.5 px-4 text-white/70 hover:text-white hover:bg-white/8 rounded-xl transition-all text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/8">
              <a
                href="#"
                className="w-full block text-center py-2.5 rounded-full text-white text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                }}
              >
                Book a demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

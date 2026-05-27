import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CheckCircleIcon, ClockIcon } from "./Icons";


/* ─── Phone Mockup ─── */
function PhoneMockup() {
  return (
    <div className="relative w-55 md:w-65 mx-auto">
      {/* Phone outer shell */}
      <div
        className="relative rounded-[44px] p-0.75 shadow-2xl"
        style={{
          background:
            "linear-gradient(145deg, #c4c4c4 0%, #888 40%, #bbb 100%)",
        }}
      >
        {/* Phone body */}
        <div
          className="rounded-[42px] overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #0e0a1a 0%, #1a0a2e 40%, #2d0b4e 70%, #4a0e72 100%)",
          }}
        >
          {/* Dynamic island */}
          <div className="flex justify-center pt-3.5 pb-1">
            <div className="w-24 h-7 bg-black rounded-full flex items-center justify-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-700" />
              <div className="w-3 h-3 rounded-full bg-gray-800" />
            </div>
          </div>

          {/* App mockup screen */}
          <div className="px-4 pb-6 pt-1 min-h-95 md:min-h-105">
            {/* App header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-purple-300/60 text-[10px] font-medium">
                Release Command Center
              </span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/60" />
              </div>
            </div>

            {/* Pipeline status */}
            <div className="text-center mb-4">
              <p className="text-purple-300/60 text-[10px] mb-1">
                Deploys Today
              </p>
              <p className="text-white font-bold text-2xl">47</p>
              <span className="text-purple-300 text-[10px] font-semibold">
                0 failed releases
              </span>
            </div>

            {/* Stage tabs */}
            <div className="flex justify-center gap-2 mb-5">
              {["Plan", "Build", "Test", "Deploy"].map((a) => (
                <div key={a} className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded bg-purple-400/50" />
                  </div>
                  <span className="text-white/50 text-[8px]">{a}</span>
                </div>
              ))}
            </div>

            {/* Build chart */}
            <div className="bg-white/10 rounded-2xl p-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-[9px] font-semibold">
                  Pipeline Throughput
                </span>
                <span className="text-purple-300 text-[9px]">Last 7 days</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5
                          ? "rgba(168,85,247,0.9)"
                          : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Recent pipelines */}
            <div className="space-y-2">
              {[
                {
                  icon: <CheckCircleIcon className="w-3.5 h-3.5" />,
                  name: "main → prod",
                  status: "2.1s",
                  color: "bg-purple-400/30",
                },
                {
                  icon: <ClockIcon className="w-3.5 h-3.5" />,
                  name: "hotfix/login-timeout",
                  status: "in progress",
                  color: "bg-pink-400/30",
                },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full ${t.color} flex items-center justify-center text-[11px]`}
                  >
                    {t.icon}
                  </div>
                  <span className="text-white/60 text-[9px] flex-1">
                    {t.name}
                  </span>
                  <span className="text-purple-300 text-[9px] font-semibold">
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute -right-1 top-24 w-1 h-8 bg-gray-500 rounded-full" />
      <div className="absolute -right-1 top-36 w-1 h-12 bg-gray-500 rounded-full" />
      <div className="absolute -left-1 top-28 w-1 h-10 bg-gray-500 rounded-full" />
    </div>
  );
}

/* ─── Floating Finance Cards ─── */
function FloatingCard({ children, className, animClass }) {
  return (
    <div
      className={`absolute bg-white rounded-2xl shadow-xl px-4 py-3 ${animClass} ${className}`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      phoneRef.current,
      { y: -60, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
    )
      .fromTo(
        [card1Ref.current, card2Ref.current, card3Ref.current],
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.8)",
        },
        "-=0.6",
      )
      .fromTo(
        headingRef.current.querySelectorAll(".hero-word"),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" },
        "-=0.5",
      )
      .fromTo(
        [subRef.current, ctaRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" },
        "-=0.3",
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-gradient-bg min-h-screen flex flex-col items-center justify-start pt-16 pb-24 overflow-hidden"
    >

      <div className="relative z-10 w-full max-w-4xl mx-auto flex justify-center pt-10 pb-4 px-6">
        {/* Phone */}
        <div ref={phoneRef} className="relative z-20 animate-float">
          <PhoneMockup />
        </div>

        <div
          ref={card1Ref}
          className="absolute left-[2%] sm:left-[8%] top-[18%] z-10 animate-float-card1"
        >
          <div className="bg-white rounded-2xl shadow-xl px-4 py-3 min-w-32.5">
            <p className="text-gray-500 text-[10px] mb-0.5">Commits today</p>
            <p className="text-gray-500 text-[10px] mb-0.5">Merges today</p>
            <p className="text-gray-900 font-bold text-xl">142</p>
            <span className="inline-block bg-purple-100 text-purple-600 text-[9px] font-bold px-2 py-0.5 rounded-full mt-1">
              ↳ +22%
            </span>
          </div>
        </div>

        {/* Card: Build success rate - right */}
        <div
          ref={card2Ref}
          className="absolute right-[2%] sm:right-[6%] top-[35%] z-10 animate-float-card2"
        >
          <div className="bg-white rounded-2xl shadow-xl px-4 py-3 min-w-35">
            <p className="text-gray-500 text-[10px] mb-0.5">Pipeline success</p>
            <p className="text-gray-900 font-bold text-xl">98.7%</p>
            <div className="flex items-end gap-0.5 mt-2 h-8">
              {[40, 70, 50, 85, 60, 90, 55].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    opacity: i === 5 ? 1 : 0.5,
                    background: i === 5 ? "#a855f7" : "#e9d5ff",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card: merged PRs - top right */}
        <div
          ref={card3Ref}
          className="absolute right-[12%] sm:right-[18%] top-[8%] z-30 animate-float-card3"
        >
          <div className="bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-3 h-3 text-purple-600"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
            <span className="text-gray-900 font-bold text-sm">+47 merges</span>
          </div>
        </div>

        {/* Card: bottom-left deploy badge */}
        <div className="absolute left-[14%] bottom-[10%] z-30 animate-float-card1">
          <div className="bg-white/90 rounded-xl shadow-lg px-3 py-2 border border-gray-100">
            <span className="text-purple-700 font-bold text-sm inline-flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4" />
              Live in production
            </span>
          </div>
        </div>
      </div>

      <div
        className="z-20 w-full pb-6"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #F5F5F5 22%, #F5F5F5 100%)",
          paddingTop: "5rem",
          marginTop: "-5rem",
        }}
      >
        {/* Big heading — overlaps slightly with phone */}
        <div
          ref={headingRef}
          className="relative text-center px-4 -mt-10 md:-mt-4 w-full"
        >
          <h1 className="font-extrabold tracking-tight leading-[0.92]">
            {/* Line 1 — purple gradient */}
            <span
              className="hero-word block text-[clamp(46px,12vw,90px)] uppercase"
              style={{
                background:
                  "linear-gradient(135deg, #c084fc 0%, #f472b6 55%, #fb7185 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Release Faster.
            </span>
            {/* Line 2 — dark on light bg */}
            <span
              className="hero-word block text-[clamp(46px,12vw,90px)] uppercase"
              style={{ color: "#0f0f1a" }}
            >
              Scale Safer.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="text-gray-500 text-base md:text-lg text-center px-6 mt-5 leading-relaxed"
        >
          One command center to automate delivery, monitor performance,
          and keep every release reliable.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row px-6 gap-4 mt-8 justify-center"
        >
          <a
            href="#"
            className="px-8 py-3.5 rounded-full font-semibold text-base text-white inline-flex items-center gap-2 shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
          >
            Start free trial
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="#"
            className="px-8 py-3.5 rounded-full font-semibold text-base text-white inline-flex items-center gap-2 hover:-translate-y-1 transition-all duration-300"
            style={{
              background: "rgba(15,15,26,0.88)",
              border: "1px solid rgba(15,15,26,0.12)",
            }}
          >
            Watch demo
          </a>
        </div>
      </div>
    </section>
  );
}

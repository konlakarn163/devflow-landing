import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
    color: 'from-purple-500/20 to-purple-500/5',
    accent: 'text-purple-400',
    title: 'CI/CD Pipelines',
    desc: 'Automate build, test, and deploy in minutes. Ship to any cloud with zero config and full visibility into every stage.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    color: 'from-fuchsia-500/20 to-fuchsia-500/5',
    accent: 'text-fuchsia-400',
    title: 'Code Review',
    desc: 'Streamline PR reviews with inline comments, AI-powered suggestions, and merge checks that enforce code quality.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    color: 'from-pink-500/20 to-pink-500/5',
    accent: 'text-pink-400',
    title: 'API Monitoring',
    desc: 'Real-time health checks, latency tracking, and alerting for all your APIs. Catch issues before your users do.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    color: 'from-amber-500/20 to-amber-500/5',
    accent: 'text-amber-400',
    title: 'Deploy Automation',
    desc: 'One-click deploys to AWS, GCP, or Azure. Blue/green, canary, and rollback strategies built in.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    color: 'from-purple-500/20 to-fuchsia-500/5',
    accent: 'text-purple-300',
    title: 'Team Workspace',
    desc: 'Role-based access, kanban boards, Sprint planning, and async stand-ups — everything for engineering collaboration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    color: 'from-rose-500/20 to-rose-500/5',
    accent: 'text-rose-400',
    title: 'Security Scanning',
    desc: 'Automated SAST, dependency audits, and container scanning on every commit. Catch vulnerabilities before they ship.',
  },
]

export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    gsap.fromTo(cards,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-28 px-6 relative">
      <div style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)' }} className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mb-5">
            <span>⚡</span> Everything you need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            A complete software<br />
            <span className="gradient-text">delivery platform</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From pipelines to production, DevFlow brings all your developer tools into one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="feature-card rounded-2xl p-7 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${f.color} ${f.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2.5">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

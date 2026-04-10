import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    quote: "DevFlow cut our deployment time from 40 minutes to under 3. The CI/CD pipeline templates are incredibly well-thought-out.",
    name: "Sarah Chen",
    role: "VP of Engineering at Veritas Cloud",
    avatar: "SC",
    color: "from-purple-500 to-violet-600",
    stars: 5,
  },
  {
    quote: "We migrated our entire release workflow to DevFlow. The API is clean, the docs are excellent, and rollback works flawlessly.",
    name: "Marcus Rivera",
    role: "Staff Engineer, Nexwave",
    avatar: "MR",
    color: "from-fuchsia-500 to-pink-600",
    stars: 5,
  },
  {
    quote: "Finally a developer platform that doesn't get in the way. Our team went from 2 deploys a week to 15 a day within a month.",
    name: "Aisha Okonkwo",
    role: "CTO at Bloom Labs",
    avatar: "AO",
    color: "from-pink-500 to-rose-600",
    stars: 5,
  },
  {
    quote: "Replaced 4 separate tools with DevFlow. Everything from code review to monitoring in one place. Our onboarding time halved.",
    name: "Thomas Park",
    role: "Engineering Lead, Stackr AI",
    avatar: "TP",
    color: "from-amber-500 to-orange-600",
    stars: 5,
  },
  {
    quote: "The security scanning caught 3 critical vulnerabilities before they hit production. Worth every dollar — it paid for itself on day one.",
    name: "Priya Mehta",
    role: "Platform Lead at TrustBridge",
    avatar: "PM",
    color: "from-rose-500 to-pink-600",
    stars: 5,
  },
  {
    quote: "We run 180+ microservices. DevFlow’s deployment dashboard gives us a single pane of glass. Uptime went from 99.5% to 99.99%.",
    name: "James Kowalski",
    role: "Director of DevOps, Global Nexus",
    avatar: "JK",
    color: "from-violet-500 to-indigo-600",
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400 text-amber-400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-28 px-6 relative">
      <div style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(168,85,247,0.06) 0%, transparent 60%)' }} className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mb-5">
            <span>💬</span> What customers say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Loved by engineering teams<br />
            <span className="gradient-text">around the world</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Real results from real teams using DevFlow to ship faster and build with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="testimonial-card rounded-2xl p-7 flex flex-col"
            >
              <Stars count={t.stars} />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

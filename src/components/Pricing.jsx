import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PLANS = [
  {
    name: 'Free',
    price: '0',
    desc: 'For individuals and side projects getting started.',
    features: [
      '1 project',
      '20 CI/CD runs/day',
      '5 GB artifact storage',
      'Community support',
      'Basic monitoring',
      '2 team members',
    ],
    cta: 'Get started',
    popular: false,
    accentColor: 'text-slate-300',
  },
  {
    name: 'Pro',
    price: '19',
    desc: 'For growing teams that ship fast and need reliability.',
    features: [
      'Unlimited projects',
      '200 CI/CD runs/day',
      '50 GB artifact storage',
      'Priority support 24/7',
      'Advanced monitoring & alerts',
      'Unlimited team members',
      'Custom deploy environments',
      'REST & GraphQL API access',
    ],
    cta: 'Start free trial',
    popular: true,
    accentColor: 'text-purple-400',
  },
  {
    name: 'Team',
    price: '49',
    desc: 'For larger organizations with enterprise-grade needs.',
    features: [
      'Everything in Pro',
      'Unlimited CI/CD runs',
      '500 GB artifact storage',
      'Dedicated account manager',
      '99.99% uptime SLA',
      'SSO & SAML',
      'Audit logs & compliance exports',
      'On-premise deployment option',
    ],
    cta: 'Contact sales',
    popular: false,
    accentColor: 'text-fuchsia-400',
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    gsap.fromTo(cards,
      { y: 60, opacity: 0, scale: 0.97 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div style={{ background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)' }} className="absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mb-5">
            <span>�</span> Simple pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Transparent plans,<br />
            <span className="gradient-text">no surprises</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Start free. Scale as your team grows. Cancel any time.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse inline-block" />
            Annual billing saves up to <span className="text-purple-400 font-semibold">30%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={`pricing-card rounded-3xl p-8 flex flex-col ${plan.popular ? 'pricing-popular' : ''}`}
            >
              {plan.popular && (
                <div className="inline-flex items-center self-start bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-xs font-semibold text-purple-300 mb-4">
                  ✦ Most Popular
                </div>
              )}

              <h3 className={`font-bold text-xl ${plan.accentColor} mb-1`}>{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-5">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                <span className="text-slate-500 text-sm ml-1">/mo</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.popular ? (
                <a href="#" className="btn-primary w-full py-3.5 rounded-2xl font-semibold text-white text-center block">
                  <span>{plan.cta}</span>
                </a>
              ) : (
                <a href="#" className="btn-ghost w-full py-3.5 rounded-2xl font-semibold text-slate-300 text-center block">
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

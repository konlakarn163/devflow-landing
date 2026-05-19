import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SparklesIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger)

const PLANS = [
  {
    name: 'Starter',
    price: '0',
    desc: 'For solo developers and small projects validating ideas.',
    features: [
      '1 active project',
      '20 pipeline runs / day',
      '5 GB artifact storage',
      'Community support',
      'Basic health monitoring',
      'Up to 2 contributors',
    ],
    cta: 'Start free',
    popular: false,
    accentColor: 'text-slate-300',
  },
  {
    name: 'Growth',
    price: '19',
    desc: 'For product teams that need speed, control, and reliability.',
    features: [
      'Unlimited projects',
      '200 pipeline runs / day',
      '50 GB artifact storage',
      'Priority support 24/7',
      'Advanced alerts and dashboards',
      'Unlimited team members',
      'Custom deployment environments',
      'REST and GraphQL API access',
    ],
    cta: 'Try Growth',
    popular: true,
    accentColor: 'text-purple-600',
  },
  {
    name: 'Enterprise',
    price: '49',
    desc: 'For large organizations with governance and compliance needs.',
    features: [
      'Everything in Growth',
      'Unlimited pipeline runs',
      '500 GB artifact storage',
      'Dedicated success manager',
      '99% uptime SLA',
      'SSO & SAML',
      'Audit logs and compliance exports',
      'Private cloud or on-prem options',
    ],
    cta: 'Talk to sales',
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Pricing that scales with<br />
            <span className="text-purple-300">your delivery goals</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Start lean, upgrade as you grow, and keep full control of your release operations.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse inline-block" />
            Save up to <span className="text-purple-400 font-semibold">30%</span> with annual billing
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
                <div className="inline-flex items-center self-start bg-slate-100 border border-slate-200 rounded-full px-3 py-1 text-xs font-semibold text-purple-600 mb-4">
                  <SparklesIcon className="w-3.5 h-3.5 mr-1.5" />
                  Best Value
                </div>
              )}

              <h3 className={`font-bold text-xl ${plan.accentColor} mb-1`}>{plan.name}</h3>
              <p className={`text-sm mb-5 ${plan.popular ? 'text-slate-600' : 'text-slate-400'}`}>{plan.desc}</p>

              <div className="mb-6">
                <span className={`text-5xl font-extrabold ${plan.popular ? 'text-slate-900' : 'text-white'}`}>${plan.price}</span>
                <span className="text-slate-500 text-sm ml-1">/mo</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-2.5 text-sm ${plan.popular ? 'text-slate-700' : 'text-slate-300'}`}>
                    <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-purple-600' : 'text-purple-300'}`} stroke="currentColor" strokeWidth="2.5">
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

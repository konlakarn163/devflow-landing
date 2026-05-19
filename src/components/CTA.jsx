import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RocketIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(innerRef.current,
      { y: 60, opacity: 0, scale: 0.97 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={innerRef}
          className="cta-grid-bg relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
          }}
        >
          <div className="relative z-10">
           
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to ship better<br />with <span className="text-purple-300">less release risk?</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Join high-performing teams using DevFlow to automate delivery,
              monitor production, and scale engineering with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary px-9 py-4 rounded-2xl text-base font-semibold text-white inline-flex items-center justify-center gap-2">
                <span>Start free trial</span>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 relative z-10" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#" className="btn-ghost px-9 py-4 rounded-2xl text-base font-medium text-slate-300 inline-flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Book a demo
              </a>
            </div>
            <p className="text-slate-500 text-xs mt-6">No credit card required · Setup in minutes · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}

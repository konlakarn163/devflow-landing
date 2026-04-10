import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.10) 50%, rgba(168,85,247,0.08) 100%)',
            border: '1px solid rgba(168,85,247,0.25)',
            boxShadow: '0 0 100px rgba(168,85,247,0.18)',
          }}
        >
          {/* BG blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }} />

          <div className="relative z-10">
            <div className="section-label mb-6 justify-center">
              <span>🚀</span> Get started today
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to ship<br />code <span className="gradient-text">10× faster?</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Join 50,000+ engineering teams that use DevFlow to automate CI/CD,
              monitor deployments, and collaborate at scale. First 14 days free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary px-9 py-4 rounded-2xl text-base font-semibold text-white inline-flex items-center justify-center gap-2">
                <span>Start for free</span>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 relative z-10" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#" className="btn-ghost px-9 py-4 rounded-2xl text-base font-medium text-slate-300 inline-flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Talk to sales
              </a>
            </div>
            <p className="text-slate-500 text-xs mt-6">No credit card required · Setup in 5 minutes · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}

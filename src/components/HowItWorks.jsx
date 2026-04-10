import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    no: '01',
    title: 'Connect your repository',
    desc: 'Link GitHub, GitLab, or Bitbucket in seconds. DevFlow auto-detects your stack and suggests pipeline templates.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    no: '02',
    title: 'Configure your pipelines',
    desc: 'Use YAML or our visual editor to define build, test, and deploy stages. No DevOps expertise required.',
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-400/10',
  },
  {
    no: '03',
    title: 'Ship with confidence',
    desc: 'Deploy to any cloud with built-in rollback, canary releases, and real-time monitoring from a single dashboard.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const panelRef = useRef(null)

  useEffect(() => {
    const steps = stepsRef.current.filter(Boolean)
    gsap.fromTo(steps,
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
    gsap.fromTo(panelRef.current,
      { x: 80, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div style={{ background: 'radial-gradient(ellipse 60% 70% at 0% 50%, rgba(168,85,247,0.07) 0%, transparent 60%)' }} className="absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-label mb-6">
              <span>🔧</span> How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Up and running<br />
              <span className="gradient-text">in minutes</span>
            </h2>
            <p className="text-slate-400 text-base mb-10 leading-relaxed max-w-md">
              No lengthy onboarding. No complex setup. Connect your repo, configure your pipeline, and deploy to production in a single afternoon.
            </p>

            <div className="space-y-6">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  ref={el => stepsRef.current[i] = el}
                  className="flex gap-5 group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${s.bg} border border-white/8 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`text-xs font-extrabold ${s.color}`}>{s.no}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mini dashboard panel */}
          <div ref={panelRef}>
            <div className="dashboard-window">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="flex-1 text-center text-slate-600 text-xs">Pipeline: main → production</span>
              </div>
              <div className="p-6 space-y-4">
                {/* Big metric */}
                <div className="text-center py-4">
                  <p className="text-slate-500 text-xs mb-1 uppercase tracking-widest">Last Deploy</p>
                  <p className="text-4xl font-extrabold stat-num">2.4s</p>
                  <span className="text-purple-400 text-sm font-semibold">✅ Deployed to prod — v3.8.1</span>
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: 'Checkout', val: 100, color: 'bg-purple-500' },
                    { label: 'Build', val: 100, color: 'bg-purple-500' },
                    { label: 'Test (142 passed)', val: 100, color: 'bg-fuchsia-500' },
                    { label: 'Deploy', val: 85, color: 'bg-pink-500' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                        <span>{item.label}</span>
                        <span className="font-semibold text-white">{item.val}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full opacity-80`}
                          style={{ width: `${item.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alerts */}
                <div className="glass rounded-xl p-3 border border-white/6">
                  <p className="text-slate-400 text-xs font-semibold mb-2">⚡ AI Insights</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Build time improved by <span className="text-purple-400 font-semibold">18%</span> vs. last release.
                    Zero failed tests. Canary traffic at <span className="text-fuchsia-400 font-semibold">10%</span> — all healthy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

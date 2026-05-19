import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChartIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger)

function useCountUp(target, duration = 2) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (started.current) return
        started.current = true
        const obj = { n: 0 }
        gsap.to(obj, {
          n: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (target % 1 !== 0) {
              setVal(parseFloat(obj.n.toFixed(2)))
            } else {
              setVal(Math.round(obj.n))
            }
          },
        })
      },
    })
    return () => trigger.kill()
  }, [target, duration])

  return [ref, val]
}

function StatItem({ prefix, number, suffix, label, color }) {
  const [ref, val] = useCountUp(number)

  return (
    <div ref={ref} className="text-center group">
      <div className={`text-5xl md:text-6xl font-extrabold mb-2 stat-num`}>
        {prefix}{val.toLocaleString()}{suffix}
      </div>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      <div className={`h-0.5 w-12 mx-auto mt-3 rounded-full ${color} opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500`} />
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)

  return (
    <section id="dashboard" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Trusted by teams shipping at <span className="text-purple-300">global scale</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            From startups to enterprises, teams rely on DevFlow to release quickly and run reliably.
          </p>
        </div>

        <div className="glass rounded-3xl p-12 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-white/5">
          <StatItem prefix="" number={50} suffix="K+" label="Projects Launched" color="bg-purple-400" />
          <StatItem prefix="" number={2} suffix="M+" label="Automated Runs / Month" color="bg-pink-400" />
          <StatItem prefix="" number={99} suffix="%" label="Platform Availability" color="bg-sky-400" />
          <StatItem prefix="" number={180} suffix="+" label="Teams Worldwide" color="bg-amber-400" />
        </div>
      </div>
    </section>
  )
}

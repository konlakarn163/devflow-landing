import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logo214 from '../assets/logos/logoipsum-214.svg'
import logo216 from '../assets/logos/logoipsum-216.svg'
import logo265 from '../assets/logos/logoipsum-265.svg'
import logo311 from '../assets/logos/logoipsum-311.svg'
import logo317 from '../assets/logos/logoipsum-317.svg'
import logo323 from '../assets/logos/logoipsum-323.svg'
import logo329 from '../assets/logos/logoipsum-329.svg'
import logo334 from '../assets/logos/logoipsum-334.svg'
import logo338 from '../assets/logos/logoipsum-338.svg'

gsap.registerPlugin(ScrollTrigger)

const LOGOS = [logo214, logo216, logo265, logo311, logo317, logo323, logo329, logo334, logo338]

export default function LogoMarquee() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%' },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="marquee-strip py-10 overflow-hidden">
      {/* Fade mask wrapper */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {/* Render logos 4× to guarantee seamless fill at any viewport */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((src, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center px-10"
            >
              <img
                src={src}
                alt="Customer logo"
                draggable={false}
                className="h-7 w-auto select-none"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.75 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

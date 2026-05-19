import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MessageIcon } from "./Icons";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote:
      "DevFlow reduced our release process from 40 minutes to under 3. We now ship faster without adding operational risk.",
    name: "Sarah Chen",
    role: "VP of Engineering at Veritas Cloud",
    avatar: "SC",
    avatarBg: "bg-cyan-500",
    stars: 5,
  },
  {
    quote:
      "We moved our full delivery workflow to DevFlow. The API is clean, docs are practical, and rollback is instant when needed.",
    name: "Marcus Rivera",
    role: "Staff Engineer, Nexwave",
    avatar: "MR",
    avatarBg: "bg-violet-500",
    stars: 5,
  },
  {
    quote:
      "Finally, a platform that removes bottlenecks instead of adding process. We jumped from 2 deploys a week to 15 a day.",
    name: "Aisha Okonkwo",
    role: "CTO at Bloom Labs",
    avatar: "AO",
    avatarBg: "bg-emerald-500",
    stars: 5,
  },
  {
    quote:
      "We replaced four disconnected tools with DevFlow. Reviews, releases, and monitoring now live in one consistent workflow.",
    name: "Thomas Park",
    role: "Engineering Lead, Stackr AI",
    avatar: "TP",
    avatarBg: "bg-amber-500",
    stars: 5,
  },
  {
    quote:
      "Security scans flagged three critical issues before production. DevFlow paid for itself the first week we adopted it.",
    name: "Priya Mehta",
    role: "Platform Lead at TrustBridge",
    avatar: "PM",
    avatarBg: "bg-rose-500",
    stars: 5,
  },
  {
    quote:
      "We run 180+ microservices. DevFlow gives us one release view across teams, and uptime improved to 99%.",
    name: "James Kowalski",
    role: "Director of DevOps, Global Nexus",
    avatar: "JK",
    avatarBg: "bg-indigo-500",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial-stars flex gap-0.5 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-amber-400 text-amber-400"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="testimonial-quote-icon w-10 h-10"
    >
      <path d="M10.27 5.14C7.2 6.07 5 8.88 5 12v6h6v-6H8.41c.32-1.34 1.42-2.42 2.86-2.86V5.14Zm8 0C15.2 6.07 13 8.88 13 12v6h6v-6h-2.59c.32-1.34 1.42-2.42 2.86-2.86V5.14Z" />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [introRef.current, sliderRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      },
    );
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={introRef} className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Teams that ship with DevFlow
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Trusted by engineering leaders who need faster delivery, better visibility,
            and fewer release incidents.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="testimonial-carousel-shell relative px-4 md:px-8"
        >
          <button
            type="button"
            className="testimonial-nav testimonial-prev"
            aria-label="Previous testimonial"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 6 9 12l6 6"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            className="testimonial-swiper"
            centeredSlides
            loop
            speed={650}
            slidesPerView={1.15}
            spaceBetween={18}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <article className="testimonial-slide-card rounded-4xl p-6 md:p-8 h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <Stars count={t.stars} />
                    <QuoteIcon />
                  </div>

                  <div className="flex flex-col items-center text-center gap-5 md:gap-6">
                    <div
                      className={`testimonial-avatar w-24 h-24 md:w-28 md:h-28 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-2xl font-bold shrink-0`}
                    >
                      {t.avatar}
                    </div>

                    <div className="flex-1">
                      <p className="testimonial-text text-sm md:text-base leading-relaxed mb-6">
                        {t.quote}
                      </p>
                      <div>
                        <p className="testimonial-name text-xl font-bold mb-1">
                          {t.name}
                        </p>
                        <p className="testimonial-role text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="testimonial-nav testimonial-next"
            aria-label="Next testimonial"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 6 6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"

export function AiVisionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#080a0e] overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <div className="animate-on-scroll opacity-0">
          <Quote className="mx-auto mb-8 h-12 w-12 text-orange-500/50" />
          
          <blockquote className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white text-balance">
            &ldquo;Não vendemos robôs.{" "}
            <span className="text-orange-500">
              Entregamos extensões inteligentes da sua equipe.
            </span>
            &rdquo;
          </blockquote>

          <div className="h-1 w-16 bg-orange-500 mx-auto mb-6" />

          <p className="text-lg text-gray-400">
            Nossa missão é criar inteligência artificial que realmente entende
            o seu negócio.
          </p>
        </div>
      </div>
    </section>
  )
}

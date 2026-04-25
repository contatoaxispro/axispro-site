"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function BrandSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.15 }
    )
    const animatables = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    animatables?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080a0e] overflow-hidden py-24 lg:py-32"
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Logo */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 shrink-0"
            style={{ transitionDelay: "0ms" }}
          >
            <div
              className="relative rounded-2xl w-80 lg:w-96 overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(249,115,22,0.25), 0 0 120px rgba(249,115,22,0.1)" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2e900f2f-ae13-4ad3-917f-507822d85e04-6lzG9Gk8YYZYUhXEdxeKKm43HFsujK.jpg"
                alt="AxisPRO – Inteligência que Move Resultados"
                width={800}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: "100ms" }}
            >
              <span className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase">
                A Marca por Trás da Inteligência
              </span>
            </div>

            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight text-balance">
                Cada solução criada pela{" "}
                <span className="text-orange-500">AxisPRO</span> carrega o DNA da sua empresa.
              </h2>
            </div>

            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Cada solução criada pela AxisPRO é projetada para refletir o DNA da empresa: sua forma de vender, seu posicionamento de mercado, sua cultura e sua maneira de se relacionar com o cliente.
              </p>
            </div>

            {/* Divider line */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex lg:justify-start justify-center"
              style={{ transitionDelay: "350ms" }}
            >
              <div className="w-16 h-[2px] bg-orange-500" />
            </div>

            {/* Tags */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-3 lg:justify-start justify-center"
              style={{ transitionDelay: "400ms" }}
            >
              {[
                "Forma de vender",
                "Posicionamento de mercado",
                "Cultura organizacional",
                "Relacionamento com cliente",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-orange-400 border border-orange-500/40 rounded-full px-4 py-1.5 bg-orange-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

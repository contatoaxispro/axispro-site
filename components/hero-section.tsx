"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Cpu, Fingerprint, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Cpu,
    label: "Inteligência Artificial",
  },
  {
    icon: Fingerprint,
    label: "DNA da Empresa",
  },
  {
    icon: Users,
    label: "Equipes Produtivas",
  },
  {
    icon: TrendingUp,
    label: "Resultados que Escalam",
  },
]

export function HeroSection() {
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
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2024%20de%20abr.%20de%202026%2C%2021_32_24-sPJ9q69y4APX5aFLykvvDOejMCdFGp.png"
          alt="AxisPRO AI Robot - Alma do Negócio"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a0e] via-[#080a0e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-transparent to-[#080a0e]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <div className="animate-on-scroll opacity-0">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                A Alma do Robô
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
                Antes de ensinar{" "}
                <br className="hidden md:block" />
                o robô a trabalhar,{" "}
                <br className="hidden md:block" />
                <span className="text-orange-500">
                  ensinamos a alma{" "}
                  <br className="hidden md:block" />
                  da sua empresa.
                </span>
              </h1>

              <div className="mb-8 h-1 w-16 bg-orange-500" />

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300">
                Criamos robôs de inteligência artificial que aprendem o DNA do
                seu negócio para potencializar sua equipe comercial e gerar
                resultados extraordinários.
              </p>

              {/* BOTÃO CORRIGIDO */}
              <a
                href="https://wa.me/555496471530?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista"
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-12 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 font-semibold uppercase tracking-wide text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Falar com Especialista
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-orange-500/30 bg-gray-900/70 px-4 py-3 backdrop-blur-sm"
                  >
                    <feature.icon className="h-5 w-5 text-orange-500" />
                    <span className="text-sm text-gray-300">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
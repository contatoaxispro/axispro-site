"use client"

import { useEffect, useRef } from "react"
import { Zap, Shield, BarChart3, Rocket } from "lucide-react"

const concepts = [
  {
    icon: Zap,
    title: "Velocidade",
    description: "Respostas instantâneas que aceleram seu ciclo de vendas",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Dados protegidos com criptografia de ponta",
  },
  {
    icon: BarChart3,
    title: "Inteligência",
    description: "Análises preditivas para decisões mais assertivas",
  },
  {
    icon: Rocket,
    title: "Escalabilidade",
    description: "Cresça sem limites operacionais",
  },
]

export function ConceptSection() {
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
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2-HDbxvQOkraxR3fsn7jRsN0efbeZ6ZK.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#080a0e]/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="animate-on-scroll opacity-0 text-center mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Por que AxisPRO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Tecnologia que transforma{" "}
            <span className="text-orange-500">resultados</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group rounded-2xl border border-orange-500/20 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-gray-900/70"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                <concept.icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {concept.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

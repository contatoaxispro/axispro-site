"use client"

import { useEffect, useRef } from "react"
import { TrendingUp, Clock, Target, Rocket, ArrowRight, MessageCircle } from "lucide-react"

const ctaCards = [
  {
    icon: TrendingUp,
    title: "Mais Resultados",
    description: "Aumente suas vendas com processos inteligentes e escaláveis.",
  },
  {
    icon: Clock,
    title: "Menos Esforço",
    description: "Automatize tarefas operacionais e foque no que realmente importa.",
  },
  {
    icon: Target,
    title: "Mais Controle",
    description: "Tenha visibilidade total da operação e tome decisões com dados.",
  },
  {
    icon: Rocket,
    title: "Mais Escala",
    description: "Cresça sem aumentar proporcionalmente sua equipe ou custos.",
  },
]

export function CtaSection() {
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
      { threshold: 0.1 }
    )
    const animatables = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    animatables?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image6-0Am7t9agz9z6tP1D3JEPx8xbBGweu5.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080a0e] via-[#080a0e]/85 to-[#080a0e]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-transparent to-[#080a0e]/50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Top: headline */}
        <div className="max-w-3xl mb-16">
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Chega de Improvisar.
            </span>
          </div>
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6"
            style={{ transitionDelay: "100ms" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-white leading-tight text-balance">
              Sua empresa está pronta para operar com{" "}
              <span className="text-orange-500">inteligência?</span>
            </h2>
          </div>
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
              A AxisPRO transforma operações comerciais em sistemas inteligentes que{" "}
              <span className="text-orange-500 font-semibold">vendem</span>,{" "}
              <span className="text-orange-500 font-semibold">atendem</span> e{" "}
              <span className="text-orange-500 font-semibold">gerenciam</span>.
            </p>
          </div>
        </div>

        {/* 4 cards */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          style={{ transitionDelay: "250ms" }}
        >
          {ctaCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300"
              style={{ boxShadow: "0 0 0 rgba(249,115,22,0)" }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 30px rgba(249,115,22,0.25)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(249,115,22,0)"
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/15 border border-orange-500/50 flex items-center justify-center">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 rounded-2xl border border-orange-500/40 overflow-hidden"
          style={{
            transitionDelay: "350ms",
            background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(0,0,0,0.6) 60%)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 50px rgba(249,115,22,0.15)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-10">
            {/* Icon + text */}
            <div className="flex items-center gap-6">
              <div
                className="w-18 h-18 rounded-xl border border-orange-500/60 flex items-center justify-center shrink-0"
                style={{ 
                  background: "rgba(249,115,22,0.15)", 
                  boxShadow: "0 0 25px rgba(249,115,22,0.35)",
                  width: "72px",
                  height: "72px"
                }}
              >
                <MessageCircle className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <p className="text-white font-black text-2xl lg:text-3xl leading-tight text-balance">
                  O futuro da sua operação começa com{" "}
                  <span className="text-orange-500">uma conversa.</span>
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col items-center gap-3 shrink-0 lg:ml-auto">
              <a
               href="https://wa.me/555496471530?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-black text-sm uppercase tracking-widest text-black px-10 py-5 rounded-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  boxShadow: "0 0 35px rgba(249,115,22,0.6), 0 4px 25px rgba(249,115,22,0.4)",
                }}
              >
                Vamos Conversar?
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-gray-400 text-sm text-center">
                Clique no botão e fale com um especialista{" "}
                <span className="text-orange-500 font-semibold">agora mesmo.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-b from-[#080a0e] to-transparent" />
    </section>
  )
}

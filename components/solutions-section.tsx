"use client"

import { useEffect, useRef } from "react"
import { Target, MessageCircle, Mail, Headphones, Radio, Scale } from "lucide-react"
import { TrendingUp } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import { User } from "lucide-react"
import { Send } from "lucide-react"
import { FileText } from "lucide-react"

const solutions = [
  {
    icon: Target,
    impactIcon: TrendingUp,
    title: "Axispro Prospecta",
    subtitle: "Prospecção automatizada com lógica comercial.",
    description:
      "Identifica empresas com potencial, coleta dados úteis e inicia abordagens estruturadas para alimentar o funil de forma contínua e escalável.",
    impact: "Mais oportunidades entrando com menos esforço manual.",
  },
  {
    icon: MessageCircle,
    impactIcon: ShieldCheck,
    title: "Axispro Pulse",
    subtitle: "WhatsApp operando como processo, não improviso.",
    description:
      "Organiza a base, controla cadência e disciplina o uso do canal para reduzir risco de bloqueio e melhorar eficiência comercial.",
    impact: "Mais consistência na comunicação e menos bagunça operacional.",
  },
  {
    icon: Mail,
    impactIcon: ShoppingCart,
    title: "Axispro Live Bot",
    subtitle: "Captação instantânea de pedidos em lives.",
    description:
      "Registra automaticamente pedidos vindos dos comentários e elimina perdas durante transmissões com alto volume de interação.",
    impact: "Mais pedidos capturados, menos retrabalho e erro humano.",
  },
  {
    icon: Headphones,
    impactIcon: User,
    title: "Axispro VOX",
    subtitle: "Secretaria inteligente sempre ativa.",
    description:
      "Recebe mensagens, interpreta solicitações e encaminha cada demanda para o lugar certo, sem deixar cliente esperando ou informação se perder.",
    impact: "Atendimento mais confiável e presença operacional 24/7.",
  },
  {
    icon: Radio,
    impactIcon: Send,
    title: "Axispro Broadcast",
    subtitle: "Comunicação em escala com governança.",
    description:
      "Centraliza disparos e distribui mensagens para múltiplos grupos com mais organização, segurança e velocidade para a operação comercial.",
    impact: "Mais alcance com menos risco e mais controle institucional.",
  },
  {
    icon: Scale,
    impactIcon: FileText,
    title: "Orchestra",
    subtitle: "Leitura operacional inteligente para o jurídico.",
    description:
      "Interpreta movimentações, organiza o que precisa ser feito e reduz risco de prazo perdido ou execução falha em fluxos jurídicos.",
    impact: "Mais clareza operacional e menos risco invisível.",
  },
]

export function SolutionsSection() {
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
      { threshold: 0.08 }
    )
    const animatables = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    animatables?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="solucoes"
      className="relative bg-[#0a0c10] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background subtle dots pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(249,115,22,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Nossas Soluções
            </span>
          </div>
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-4"
            style={{ transitionDelay: "100ms" }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight text-balance">
              Tecnologia com{" "}
              <span className="text-orange-500">resultado direto</span>
            </h2>
          </div>
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-4 flex justify-center"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="w-16 h-[2px] bg-orange-500" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ icon: Icon, impactIcon: ImpactIcon, title, subtitle, description, impact }, i) => (
            <div
              key={title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="relative h-full flex flex-col bg-[#0d1117] rounded-2xl overflow-hidden border border-orange-500/25 hover:border-orange-500/60 transition-all duration-300"
                style={{
                  boxShadow: "0 0 0 rgba(249,115,22,0)",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 30px rgba(249,115,22,0.2), 0 0 60px rgba(249,115,22,0.07)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 0 rgba(249,115,22,0)"
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500/40 group-hover:bg-orange-500/80 transition-colors duration-300" />

                {/* Card content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-orange-500/40 bg-orange-500/10"
                    >
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-orange-500 border border-orange-500/40 rounded-full px-3 py-1 bg-orange-500/10 uppercase shrink-0 mt-1">
                      Resultado
                    </span>
                  </div>

                  {/* Title + subtitle */}
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
                    <p className="text-orange-400 text-sm font-semibold mt-1 leading-snug">{subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

                  {/* Impact block */}
                  <div className="mt-auto pt-4 border-t border-orange-500/20 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-orange-500/10 border border-orange-500/30">
                      <ImpactIcon className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-orange-500 text-[10px] font-bold tracking-widest uppercase mb-1">
                        Impacto Direto
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed">{impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

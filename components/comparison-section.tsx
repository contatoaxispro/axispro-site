"use client"

import { useEffect, useRef } from "react"
import { X, Target, TrendingUp, MessageCircle, Mail, ShoppingCart, Headphones, Radio, Database, Zap, BarChart3, Search, Filter, AlertTriangle, Play, UserCheck, Send, FolderOpen, Users } from "lucide-react"

const traditional = [
  { icon: Search, text: "Prospecção manual e listas genéricas", badge: "Baixa assertividade" },
  { icon: Filter, text: "Leads entrando de forma irregular no funil", badge: "Fluxo instável" },
  { icon: MessageCircle, text: "WhatsApp usado de forma improvisada por vendedores", badge: "Comunicação desorganizada" },
  { icon: AlertTriangle, text: "Perda de mensagens e solicitações de clientes", badge: "Oportunidades perdidas" },
  { icon: Play, text: "Pedidos em lives ou redes sociais se perdem nos comentários", badge: "Retrabalho e erros" },
  { icon: UserCheck, text: "Atendimento dependente da disponibilidade humana", badge: "Horário limitado" },
  { icon: Send, text: "Disparo manual de mensagens para grupos e clientes", badge: "Escala limitada" },
  { icon: FolderOpen, text: "Informações comerciais espalhadas entre pessoas e sistemas", badge: "Falta de visibilidade" },
  { icon: Users, text: "Processos comerciais dependentes de esforço humano", badge: "Operação pesada" },
  { icon: BarChart3, text: "Decisões baseadas em percepção e urgência", badge: "Baixa previsibilidade" },
]

const axispro = [
  { icon: Target, text: "Prospecção estruturada com inteligência de dados e automação", badge: "Alta assertividade" },
  { icon: TrendingUp, text: "Fluxo constante e escalável de oportunidades qualificadas", badge: "Funil previsível" },
  { icon: MessageCircle, text: "Comunicação estruturada e governada como processo comercial", badge: "Conversas produtivas" },
  { icon: Mail, text: "Centralização e organização automática das interações", badge: "Nenhuma oportunidade se perde" },
  { icon: ShoppingCart, text: "Captura automática de pedidos e registros em tempo real", badge: "Pedidos organizados e rastreáveis" },
  { icon: Headphones, text: "Secretaria inteligente operando 24 horas por dia", badge: "Atendimento contínuo e profissional" },
  { icon: Radio, text: "Comunicação em escala com controle institucional", badge: "Alcance com governança" },
  { icon: Database, text: "Fluxo organizado de dados e inteligência operacional", badge: "Visão completa do negócio" },
  { icon: Zap, text: "Operação automatizada com supervisão estratégica", badge: "Escala com eficiência" },
  { icon: BarChart3, text: "Decisões orientadas por dados e inteligência corporativa", badge: "Alta previsibilidade" },
]

export function ComparisonSection() {
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
      { threshold: 0.05 }
    )
    const animatables = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    animatables?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="comparativo"
      className="relative bg-[#080a0e] py-24 lg:py-32 overflow-hidden"
    >
      {/* Side glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-orange-600/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Comparativo
            </span>
          </div>
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-3"
            style={{ transitionDelay: "100ms" }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight text-balance max-w-3xl">
              Do improviso operacional à{" "}
              <span className="text-orange-500">inteligência corporativa.</span>
            </h2>
          </div>
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-4"
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-gray-400 text-base max-w-xl">
              Enquanto uns ainda operam no modo manual, empresas inteligentes operam com{" "}
              <span className="text-white font-semibold">AxisPRO.</span>
            </p>
          </div>
        </div>

        {/* Comparison grid */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-start">
            {/* Traditional */}
            <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.03]">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Operação Tradicional</p>
                  <p className="text-gray-500 text-xs">Esforço manual, retrabalho e oportunidades perdidas.</p>
                </div>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {traditional.map(({ icon: Icon, text, badge }) => (
                  <div key={text} className="flex items-center justify-between gap-3 px-5 py-3.5 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className="w-4 h-4 text-gray-500 shrink-0" />
                      <p className="text-gray-400 text-sm leading-snug">{text}</p>
                    </div>
                    <span className="text-gray-500 text-xs font-medium whitespace-nowrap shrink-0 ml-2">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Central */}
            <div className="hidden lg:flex flex-col items-center justify-center self-stretch">
              <div className="sticky top-1/2">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-sm text-white"
                  style={{
                    background: "radial-gradient(circle, #f97316 0%, #c2410c 100%)",
                    boxShadow: "0 0 30px rgba(249,115,22,0.5), 0 0 60px rgba(249,115,22,0.2)",
                  }}
                >
                  VS
                </div>
              </div>
            </div>

            {/* AxisPRO */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(249,115,22,0.5)",
                boxShadow: "0 0 30px rgba(249,115,22,0.12), 0 0 60px rgba(249,115,22,0.05)",
              }}
            >
              <div
                className="flex items-center gap-3 px-5 py-4 border-b"
                style={{ borderColor: "rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.06)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "radial-gradient(circle, #f97316 0%, #c2410c 100%)",
                    boxShadow: "0 0 12px rgba(249,115,22,0.5)",
                  }}
                >
                  <span className="text-white font-black text-xs">A</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Operação com AxisPRO</p>
                  <p className="text-orange-400/80 text-xs">Inteligência corporativa aplicada ao comercial.</p>
                </div>
              </div>
              <div className="divide-y bg-[#0d1117]" style={{ borderColor: "rgba(249,115,22,0.15)" }}>
                {axispro.map(({ icon: Icon, text, badge }) => (
                  <div
                    key={text}
                    className="flex items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-orange-500/5"
                    style={{ borderColor: "rgba(249,115,22,0.1)" }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className="w-4 h-4 text-orange-500 shrink-0" />
                      <p className="text-gray-300 text-sm leading-snug">{text}</p>
                    </div>
                    <span className="text-orange-500 text-xs font-semibold whitespace-nowrap shrink-0 ml-2">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VS mobile */}
        <div className="lg:hidden flex justify-center my-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center font-black text-sm text-white"
            style={{
              background: "radial-gradient(circle, #f97316 0%, #c2410c 100%)",
              boxShadow: "0 0 30px rgba(249,115,22,0.5)",
            }}
          >
            VS
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-10 rounded-xl border border-orange-500/20 bg-[#0d1117] px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-center"
          style={{ transitionDelay: "300ms" }}
        >
          <p className="text-gray-300 text-sm">
            Empresas tradicionais operam com <span className="text-white font-bold">esforço.</span>
          </p>
          <div className="hidden sm:block w-px h-6 bg-orange-500/30" />
          <p className="text-gray-300 text-sm">
            Empresas inteligentes operam com{" "}
            <span className="text-orange-500 font-bold">estrutura.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

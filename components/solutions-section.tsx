"use client"

import {
  Target,
  MessageCircle,
  Radio,
  Mail,
  Lock,
  RefreshCcw,
  Repeat,
  Scale,
} from "lucide-react"

const solutions = [
  {
    icon: Target,
    step: "01",
    stage: "Atrair",
    title: "Axispro Prospecta",
    subtitle: "Prospecção automatizada com lógica comercial.",
    description:
      "Identifica empresas com potencial, coleta dados úteis e inicia abordagens estruturadas para alimentar o funil de forma contínua e escalável.",
    impact: "Mais oportunidades entrando com menos esforço manual.",
  },
  {
    icon: MessageCircle,
    step: "02",
    stage: "Organizar",
    title: "Axispro Pulse",
    subtitle: "WhatsApp operando como processo, não improviso.",
    description:
      "Organiza a base, controla cadência e disciplina o uso do canal para reduzir risco de bloqueio e melhorar eficiência comercial.",
    impact: "Mais consistência na comunicação e menos bagunça operacional.",
  },
  {
    icon: Radio,
    step: "03",
    stage: "Escalar",
    title: "Axispro Broadcast",
    subtitle: "Comunicação em escala com governança.",
    description:
      "Centraliza disparos e distribui mensagens para múltiplos grupos com mais organização, segurança e velocidade para a operação comercial.",
    impact: "Mais alcance com controle e menos risco.",
  },
  {
    icon: Mail,
    step: "04",
    stage: "Capturar",
    title: "Axispro Live Bot",
    subtitle: "Captação instantânea de pedidos em lives.",
    description:
      "Registra automaticamente pedidos vindos dos comentários e elimina perdas durante transmissões com alto volume de interação.",
    impact: "Mais pedidos capturados, menos retrabalho e erro humano.",
  },
  {
    icon: Lock,
    step: "05",
    stage: "Atender",
    title: "Axispro VOX",
    subtitle: "Secretaria inteligente sempre ativa.",
    description:
      "Recebe mensagens, interpreta solicitações e encaminha cada demanda para o lugar certo, sem deixar cliente esperando ou informação se perder.",
    impact: "Mais organização e menos perda de oportunidades.",
  },
  {
    icon: RefreshCcw,
    step: "06",
    stage: "Recuperar",
    title: "Axispro VOX Recupera",
    subtitle: "Recuperação automática de inadimplentes.",
    description:
      "Reativa clientes com pagamentos pendentes através de lembretes inteligentes e abordagens automatizadas, sem fricção e sem desgaste comercial.",
    impact: "Mais valores recuperados com menos esforço operacional.",
  },
  {
    icon: Repeat,
    step: "07",
    stage: "Recorrer",
    title: "Axispro VOX Cycle",
    subtitle: "Ciclo de recompra automatizado.",
    description:
      "Aciona clientes no momento certo para gerar novas compras, estruturando a recorrência sem depender de ação manual da equipe.",
    impact: "Mais vendas recorrentes sem aumento de equipe.",
  },
  {
    icon: Scale,
    step: "08",
    stage: "Especializado",
    title: "Orchestra",
    subtitle: "Inteligência operacional para o jurídico.",
    description:
      "Um modelo especializado para operações jurídicas, capaz de interpretar movimentações, organizar demandas e reduzir falhas em prazos, tarefas e rotinas críticas.",
    impact: "Mais controle, previsibilidade e segurança para equipes jurídicas.",
    isSpecial: true,
  },
]

export function SolutionsSection() {
  return (
    <section id="solucoes" className="relative py-24 bg-[#080a0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs uppercase tracking-[0.3em] mb-3">
            NOSSAS SOLUÇÕES
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Tecnologia com <span className="text-orange-500">resultado direto</span>
          </h2>

          <div className="mt-4 h-1 w-16 bg-orange-500 mx-auto" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="border border-orange-500/20 rounded-xl p-6 bg-[#0b0f16] hover:border-orange-500/40 transition-all"
            >
              {/* TOPO */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-500/10">
                  <item.icon className="w-5 h-5 text-orange-500" />
                </div>

                {/* ETAPA */}
                <span className="text-[10px] px-3 py-1 border border-orange-500/40 rounded-full text-orange-500 tracking-widest">
                  {item.stage}
                </span>
              </div>

              {/* NUMERAÇÃO */}
              <p className="text-xs text-orange-500 mb-2 tracking-widest">
                ETAPA {item.step}
              </p>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-orange-500 text-sm mb-3">
                {item.subtitle}
              </p>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-4 border-t border-orange-500/20">
                <p className="text-xs text-orange-500 uppercase tracking-widest mb-1">
                  Impacto direto
                </p>

                <p className="text-sm text-gray-300">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
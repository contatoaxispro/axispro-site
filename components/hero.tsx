"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, Sparkles } from "lucide-react"

const pains = [
  "Leads que esfriam por falta de resposta rápida",
  "Follow-ups esquecidos no WhatsApp",
  "Processos que dependem demais de pessoas",
]

const metrics = [
  { title: "24/7", subtitle: "Atendimento ativo" },
  { title: "Sem falhas", subtitle: "Execução contínua" },
  { title: "Previsível", subtitle: "Rotina controlada" },
  { title: "Com IA", subtitle: "Atendimento inteligente" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0712] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.14),transparent_25%),linear-gradient(180deg,#0a0712_0%,#120a20_58%,#171022_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="container relative z-10 mx-auto px-4 pt-6 md:pt-8">
        <div className="flex items-center justify-between rounded-full border border-white/12 bg-white/5 px-5 py-4 backdrop-blur-xl md:px-7">
          <div className="flex min-w-0 items-center gap-5">
            <Image
              src="/images/logo-axispro-light.png"
              alt="AxisPro Inteligência Corporativa"
              width={180}
              height={44}
              className="h-auto w-[170px] shrink-0 object-contain object-left drop-shadow-[0_0_18px_rgba(255,255,255,0.08)] md:w-[220px]"
              priority
            />
            <span className="hidden rounded-full border border-white/14 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 lg:inline-flex">
              IA aplicada à execução comercial
            </span>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-white/72 md:flex">
            <a href="#sobre" className="transition hover:text-white">
              Visão
            </a>
            <a href="#ecossistema" className="transition hover:text-white">
              Soluções
            </a>
            <a href="#como-funciona" className="transition hover:text-white">
              Como funciona
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white/82">
              <Sparkles className="h-4 w-4 text-primary" />
              Atendimento, rotina e operação com mais consistência
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Se o atendimento falha, a oportunidade escapa. <span className="text-primary">Resultado não dorme.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/76 md:text-xl">
              Otimizamos processos com IA para empresas que querem parar de perder oportunidade por atraso de resposta,
              falha de execução e excesso de dependência humana no operacional.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/555496471530?text=Quero%20entender%20onde%20minha%20opera%C3%A7%C3%A3o%20est%C3%A1%20perdendo%20tempo%20e%20oportunidade"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_18px_45px_rgba(124,58,237,0.32)] transition hover:scale-[1.02] hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com a Axispro
              </a>
              <a
                href="#como-funciona"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/14 px-7 text-base font-semibold text-white transition hover:bg-white hover:text-[#0a0712]"
              >
                Entender a lógica
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 text-sm text-white/84">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                WhatsApp, atendimento e operação sob controle
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Menos dependência humana para executar o básico
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-primary/18 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_30px_80px_rgba(4,2,11,0.45)] backdrop-blur-xl md:p-5">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#0c0815] p-6 md:p-7">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/45">Raio-X da operação</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight text-white md:text-[2rem]">Onde sua operação trava hoje</h2>
                  </div>
                  <div className="rounded-2xl bg-primary/15 p-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  {pains.map((pain) => (
                    <div key={pain} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                      <div className="mt-0.5 rounded-full bg-primary/12 p-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm leading-6 text-white/82 md:text-[15px]">{pain}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  {metrics.map((item) => (
                    <div
                      key={item.title}
                      className="flex min-h-[146px] flex-col items-center justify-center rounded-2xl bg-white/[0.04] px-3 py-4 text-center"
                    >
                      <div className="max-w-[140px] text-[1.65rem] font-black leading-[0.92] tracking-[-0.05em] text-white md:text-[1.9rem]">
                        {item.title}
                      </div>
                      <div className="mt-2 max-w-[128px] text-[11px] font-medium uppercase leading-[1.22] tracking-[0.16em] text-white/60">
                        {item.subtitle}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/8 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-white/78">
                    <Clock3 className="h-4 w-4 shrink-0 text-primary" />
                    O problema não é esforço. É tempo mal distribuído na operação.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

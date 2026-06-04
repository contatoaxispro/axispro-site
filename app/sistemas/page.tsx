"use client"

import Link from "next/link"

const sistemas = [
  {
    nome: "VOX CORE",
    subtitulo: "Operação Comercial Autônoma",
    descricao:
      "Gestão comercial, produção, follow-ups e indicadores em uma única plataforma.",
    url: "https://voxcore.axisprointeligencia.com.br",
  },
  {
    nome: "DEMO",
    subtitulo: "Ambiente de Demonstração",
    descricao:
      "Área comercial para apresentação e validação das soluções AxisPro.",
    url: "https://demo.axisprointeligencia.com.br",
  },
]

export default function SistemasPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="network-line top-[24%] left-[-15%] w-[130%]">
          <span className="network-dot dot-1" />
          <span className="network-dot dot-2" />
        </div>

        <div className="network-line top-[38%] left-[-10%] w-[120%] opacity-80">
          <span className="network-dot dot-3" />
        </div>

        <div className="network-line top-[54%] left-[-18%] w-[136%] opacity-70">
          <span className="network-dot dot-4" />
          <span className="network-dot dot-5" />
        </div>

        <div className="network-line top-[70%] left-[-12%] w-[124%] opacity-60">
          <span className="network-dot dot-6" />
        </div>

        <div className="absolute left-[18%] top-[24%] h-2 w-2 rounded-full bg-orange-500/25 shadow-[0_0_18px_rgba(249,115,22,0.45)]" />
        <div className="absolute left-[44%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/18" />
        <div className="absolute left-[72%] top-[54%] h-2 w-2 rounded-full bg-orange-500/20 shadow-[0_0_14px_rgba(249,115,22,0.4)]" />
        <div className="absolute left-[84%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/16" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10">
        <header className="flex justify-center">
          <p className="text-xs font-semibold tracking-[0.55em] text-orange-500">
            AXISPRO
          </p>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <h1 className="max-w-4xl text-5xl font-extralight tracking-tight md:text-7xl">
            Centro de Soluções
          </h1>

          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/45 md:text-lg">
            Ecossistema de automação e inteligência para operações comerciais.
          </p>

          <div className="mt-14 grid w-full gap-5 md:grid-cols-2">
            {sistemas.map((sistema, index) => (
              <Link
                key={sistema.nome}
                href={sistema.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[310px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f]/90 p-8 text-left shadow-2xl shadow-black/30 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/70 hover:bg-[#141414] hover:shadow-[0_0_40px_rgba(249,115,22,0.08)]"
              >
                <div className="absolute right-7 top-7 text-7xl font-light text-white/[0.035]">
                  0{index + 1}
                </div>

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="mb-10 block h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24" />

                    <h2 className="text-4xl font-light tracking-tight">
                      {sistema.nome}
                    </h2>

                    <p className="mt-4 text-lg text-white/70">
                      {sistema.subtitulo}
                    </p>

                    <p className="mt-5 max-w-md text-sm leading-relaxed text-white/42">
                      {sistema.descricao}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-xs uppercase tracking-[0.24em] text-white/35">
                      Acessar
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-2xl text-orange-500 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-500 group-hover:text-black">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-sm">
            <span className="text-white/20">
              Prospecta · Pulse · Broadcast · Agro
            </span>
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/25">
          <span>AxisPro Inteligência</span>
          <span>Sistemas e automações comerciais</span>
        </footer>
      </section>

      <style jsx>{`
        .network-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(249, 115, 22, 0.12),
            rgba(255, 255, 255, 0.1),
            rgba(249, 115, 22, 0.1),
            transparent
          );
        }

        .network-line::before,
        .network-line::after {
          content: "";
          position: absolute;
          top: -60px;
          width: 1px;
          height: 120px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(249, 115, 22, 0.08),
            transparent
          );
        }

        .network-line::before {
          left: 28%;
        }

        .network-line::after {
          left: 68%;
        }

        .network-dot {
          position: absolute;
          top: -3px;
          height: 7px;
          width: 7px;
          border-radius: 999px;
          background: rgb(249, 115, 22);
          box-shadow: 0 0 14px rgba(249, 115, 22, 0.85),
            0 0 34px rgba(249, 115, 22, 0.35);
          opacity: 0.8;
        }

        .dot-1 {
          animation: moveDot 12s linear infinite;
        }

        .dot-2 {
          animation: moveDot 18s linear infinite;
          animation-delay: -8s;
        }

        .dot-3 {
          animation: moveDot 16s linear infinite;
          animation-delay: -4s;
        }

        .dot-4 {
          animation: moveDot 14s linear infinite;
          animation-delay: -10s;
        }

        .dot-5 {
          animation: moveDot 21s linear infinite;
          animation-delay: -6s;
        }

        .dot-6 {
          animation: moveDot 19s linear infinite;
          animation-delay: -12s;
        }

        @keyframes moveDot {
          from {
            left: -2%;
            transform: scale(0.8);
            opacity: 0;
          }

          10% {
            opacity: 0.85;
          }

          50% {
            transform: scale(1);
            opacity: 1;
          }

          90% {
            opacity: 0.85;
          }

          to {
            left: 102%;
            transform: scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  )
}
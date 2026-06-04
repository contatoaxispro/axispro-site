import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  Layers3,
  LockKeyhole,
  MonitorPlay,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const systems = [
  {
    name: "VOX CORE",
    label: "Sistema ativo",
    description:
      "Gestão operacional inteligente para clientes, pedidos, produção, atendimentos, follow-ups e indicadores executivos.",
    href: "https://voxcore.axisprointeligencia.com.br",
    icon: Bot,
    gradient: "from-orange-500/25 via-orange-500/10 to-transparent",
    border: "border-orange-500/35",
    button: "Acessar VOX CORE",
    bullets: ["Dashboard executivo", "Pedidos e produção", "Atendimento comercial"],
  },
  {
    name: "Ambiente Demo",
    label: "Demonstrações",
    description:
      "Área comercial para apresentar protótipos, pilotos e demonstrações dos sistemas AxisPRO em desenvolvimento.",
    href: "https://demo.axisprointeligencia.com.br",
    icon: MonitorPlay,
    gradient: "from-blue-500/25 via-cyan-500/10 to-transparent",
    border: "border-cyan-400/30",
    button: "Abrir ambiente demo",
    bullets: ["Demos comerciais", "Validação com clientes", "Novas soluções"],
  },
]

const futureSystems = [
  "Prospecta",
  "Pulse",
  "Broadcast",
  "AxisPRO VOX",
  "AxisPRO Agro",
]

export const metadata = {
  title: "Sistemas AxisPRO | Central de Aplicações",
  description:
    "Hub comercial dos sistemas AxisPRO para acesso ao VOX CORE, ambientes demo e futuras soluções de inteligência corporativa.",
}

export default function SistemasPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080a0e] text-white">
      <section className="relative min-h-screen px-6 py-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-[10%] h-[620px] w-[620px] rounded-full bg-orange-600/10 blur-[140px]" />
          <div className="absolute bottom-[-22%] left-[35%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_34%),linear-gradient(90deg,rgba(8,10,14,0.98)_0%,rgba(8,10,14,0.9)_42%,rgba(8,10,14,0.72)_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/axispro-logo.png"
                alt="AxisPRO"
                width={150}
                height={42}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>

            <div className="hidden items-center gap-3 rounded-full border border-orange-500/20 bg-white/[0.03] px-4 py-2 text-xs text-gray-400 backdrop-blur md:flex">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              Central de sistemas corporativos
            </div>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-10">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-orange-400">
                <Sparkles className="h-4 w-4" />
                Sistemas AxisPRO
              </div>

              <h1 className="text-5xl font-black leading-[1.05] tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
                Uma central para acessar as ferramentas que movem a operação.
              </h1>

              <div className="mt-8 h-1 w-16 rounded-full bg-orange-500 shadow-[0_0_24px_rgba(249,115,22,0.7)]" />

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                Use esta página como hub comercial para apresentar sistemas, demos e ambientes ativos da AxisPRO com navegação simples, visual premium e acesso direto às soluções.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://voxcore.axisprointeligencia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.45)]"
                >
                  Entrar no VOX CORE
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://demo.axisprointeligencia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500/25 bg-white/[0.03] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/10"
                >
                  Abrir Demo
                  <ExternalLink className="h-4 w-4 text-orange-400" />
                </a>
              </div>

              <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
                {[
                  { icon: BriefcaseBusiness, label: "Apresentação comercial" },
                  { icon: Layers3, label: "Ambientes centralizados" },
                  { icon: LockKeyhole, label: "Acessos separados" },
                  { icon: Rocket, label: "Pronto para escalar" },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-orange-500/20 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 backdrop-blur"
                    >
                      <Icon className="h-4 w-4 text-orange-400" />
                      {item.label}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-orange-500/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-orange-500/20 bg-[#0d1117]/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-6">
                <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
                      Hub de acesso
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Escolha o ambiente
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-3">
                    <FlaskConical className="h-6 w-6 text-orange-400" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {systems.map((system) => {
                    const Icon = system.icon

                    return (
                      <a
                        key={system.name}
                        href={system.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative overflow-hidden rounded-2xl border ${system.border} bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(249,115,22,0.16)]`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-70 transition-opacity group-hover:opacity-100`} />
                        <div className="relative z-10">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-orange-400 shadow-inner">
                                <Icon className="h-7 w-7" />
                              </div>
                              <div>
                                <div className="mb-1 inline-flex rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-300">
                                  {system.label}
                                </div>
                                <h3 className="text-2xl font-black text-white">{system.name}</h3>
                              </div>
                            </div>

                            <div className="rounded-full border border-white/10 bg-black/25 p-2 text-gray-400 transition-colors group-hover:text-orange-400">
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </div>

                          <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-300">
                            {system.description}
                          </p>

                          <div className="mt-5 grid gap-2 sm:grid-cols-3">
                            {system.bullets.map((bullet) => (
                              <div key={bullet} className="flex items-center gap-2 text-xs text-gray-300">
                                <CheckCircle2 className="h-4 w-4 text-orange-400" />
                                {bullet}
                              </div>
                            ))}
                          </div>

                          <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white transition-colors group-hover:bg-orange-500 group-hover:text-black">
                            {system.button}
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-black/20 p-5">
                  <p className="text-sm font-bold text-white">Próximos sistemas no hub</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {futureSystems.map((system) => (
                      <span
                        key={system}
                        className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

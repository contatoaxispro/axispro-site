import { AlertTriangle, Cpu, LineChart, Workflow } from "lucide-react"

const pillars = [
  {
    title: "Menos perda invisível",
    description: "A empresa para de depender de memória, boa vontade e improviso para responder, cobrar e acompanhar oportunidade.",
    icon: AlertTriangle,
  },
  {
    title: "Mais execução contínua",
    description: "A Axispro otimiza processos que trabalham com padrão, lógica comercial e constância no dia a dia.",
    icon: Cpu,
  },
  {
    title: "Mais previsibilidade",
    description: "Você passa a enxergar o que entrou, o que travou e o que realmente precisa de ação humana.",
    icon: LineChart,
  },
  {
    title: "Mais integração operacional",
    description: "Atendimento, prospecção, comunicação e rotina comercial deixam de funcionar como ilhas separadas.",
    icon: Workflow,
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Visão Axispro</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">
                Sua empresa não precisa de mais um sistema. Precisa executar melhor.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Não criamos sistemas. Otimizamos processos com IA para empresas que querem parar de perder oportunidade
                por falha de execução, lentidão operacional e excesso de dependência humana.
              </p>

              <div className="mt-8 rounded-[1.8rem] border border-primary/12 bg-[linear-gradient(180deg,#ffffff_0%,#f7f2fc_100%)] p-7 shadow-[0_20px_55px_rgba(111,44,143,0.08)]">
                <p className="text-2xl font-bold leading-relaxed text-foreground md:text-[2rem]">
                  Não criamos sistemas. <span className="text-primary">Otimizamos processos com IA</span> para reduzir
                  atraso, falha e perda de oportunidade na execução.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_12px_35px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(111,44,143,0.10)]"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary transition group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

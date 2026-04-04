import { ArrowRightLeft, ShieldCheck, Zap } from "lucide-react"

const withoutAxispro = [
  "Leads chegam e não recebem resposta no tempo certo.",
  "Follow-ups se perdem no meio da rotina.",
  "A operação depende de memória, esforço e improviso.",
  "Falta clareza sobre o que realmente está travando o avanço.",
  "Oportunidades escapam todos os dias sem leitura objetiva.",
]

const withAxispro = [
  "Resposta mais rápida, organizada e consistente em todos os contatos.",
  "Follow-up contínuo sem depender de alguém lembrar de agir.",
  "Execução mais previsível, com menos falha repetitiva.",
  "Clareza sobre gargalos, prioridade e pontos reais de ação.",
  "Mais aproveitamento das oportunidades que já entram na operação.",
]

function ComparisonColumn({
  label,
  title,
  description,
  points,
  positive = false,
}: {
  label: string
  title: string
  description: string
  points: string[]
  positive?: boolean
}) {
  return (
    <div
      className={`rounded-[1.6rem] border p-5 transition-all duration-300 md:p-6 ${
        positive
          ? "border-primary/18 bg-[linear-gradient(180deg,rgba(111,44,143,0.05)_0%,rgba(111,44,143,0.02)_100%)] hover:border-primary/30 hover:shadow-[0_18px_40px_rgba(111,44,143,0.10)]"
          : "border-border/80 bg-white/70 hover:border-primary/16 hover:shadow-[0_16px_34px_rgba(17,17,17,0.05)]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${positive ? "text-primary" : "text-foreground/55"}`}>
            {label}
          </p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground md:text-[2rem]">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground md:text-[15px]">{description}</p>
        </div>

        <div
          className={`hidden rounded-2xl p-3 md:block ${positive ? "bg-primary/10 text-primary" : "bg-foreground/[0.04] text-foreground/55"}`}
        >
          {positive ? <ShieldCheck className="h-5 w-5" /> : <ArrowRightLeft className="h-5 w-5" />}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {points.map((point) => (
          <div
            key={point}
            className={`group flex items-start gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-300 ${
              positive
                ? "border-primary/10 bg-white/80 hover:border-primary/24 hover:bg-white"
                : "border-border/70 bg-background/70 hover:border-primary/14 hover:bg-background"
            }`}
          >
            <span
              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                positive ? "bg-primary group-hover:scale-110" : "bg-foreground/30 group-hover:bg-primary/55"
              }`}
            />
            <p className={`text-sm leading-6 md:text-[15px] ${positive ? "font-medium text-foreground" : "text-muted-foreground"}`}>
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section id="como-funciona" className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Comparativo operacional</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-balance text-foreground md:text-5xl">
              Onde a oportunidade escapa <span className="text-primary">e onde a Axispro corrige a execução.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O problema raramente é falta de demanda. Na maioria das empresas, a perda acontece entre a entrada do contato e a execução do que precisava acontecer.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-primary/12 bg-[linear-gradient(180deg,#ffffff_0%,#f7f3fc_100%)] p-4 shadow-[0_22px_55px_rgba(111,44,143,0.08)] md:p-6 lg:p-7">
            <div className="mb-5 flex items-center justify-between gap-4 rounded-[1.45rem] border border-primary/10 bg-white/80 px-5 py-4 backdrop-blur-sm md:px-6">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-primary">Leitura rápida</p>
                <h3 className="mt-2 text-lg font-bold text-foreground md:text-xl">
                  Sem execução estruturada, a empresa perde tempo, resposta e oportunidade.
                </h3>
              </div>
              <div className="hidden rounded-2xl bg-primary/10 p-3 text-primary md:block">
                <Zap className="h-5 w-5" />
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
              <ComparisonColumn
                label="Sem Axispro"
                title="A oportunidade entra, mas não avança como deveria."
                description="A operação até trabalha, mas a execução depende demais de tempo humano, memória e reação tardia."
                points={withoutAxispro}
              />

              <ComparisonColumn
                label="Com Axispro"
                title="A operação ganha ritmo, leitura e continuidade."
                description="A IA entra para organizar a execução, reduzir falha operacional e sustentar uma rotina comercial mais previsível."
                points={withAxispro}
                positive
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

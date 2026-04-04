import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Headphones, MessageSquare, Radio, Scale, ShoppingBag, Target } from "lucide-react"

const products = [
  {
    name: "Axispro Prospecta",
    tagline: "Prospecção automatizada com lógica comercial.",
    description:
      "Identifica empresas com potencial, coleta dados úteis e inicia abordagens estruturadas para alimentar o funil de forma contínua e escalável.",
    result: "Mais oportunidades entrando com menos esforço manual.",
    icon: Target,
  },
  {
    name: "Axispro Pulse",
    tagline: "WhatsApp operando como processo, não improviso.",
    description:
      "Organiza a base, controla cadência e disciplina o uso do canal para reduzir risco de bloqueio e melhorar eficiência comercial.",
    result: "Mais consistência na comunicação e menos bagunça operacional.",
    icon: MessageSquare,
  },
  {
    name: "Axispro Live Bot",
    tagline: "Captação instantânea de pedidos em lives.",
    description:
      "Registra automaticamente pedidos vindos dos comentários e elimina perdas durante transmissões com alto volume de interação.",
    result: "Mais pedidos capturados, menos retrabalho e erro humano.",
    icon: ShoppingBag,
  },
  {
    name: "Axispro VOX",
    tagline: "Secretaria inteligente sempre ativa.",
    description:
      "Recebe mensagens, interpreta solicitações e encaminha cada demanda para o lugar certo, sem deixar cliente esperando ou informação se perder.",
    result: "Atendimento mais confiável e presença operacional 24/7.",
    icon: Headphones,
  },
  {
    name: "Axispro Broadcast",
    tagline: "Comunicação em escala com governança.",
    description:
      "Centraliza disparos e distribui mensagens para múltiplos grupos com mais organização, segurança e velocidade para a operação comercial.",
    result: "Mais alcance com menos risco e mais controle institucional.",
    icon: Radio,
  },
  {
    name: "Orchestra",
    tagline: "Leitura operacional inteligente para o jurídico.",
    description:
      "Interpreta movimentações, organiza o que precisa ser feito e reduz risco de prazo perdido ou execução falha em fluxos jurídicos.",
    result: "Mais clareza operacional e menos risco invisível.",
    icon: Scale,
  },
]

export function Products() {
  return (
    <section id="ecossistema" className="bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Ecossistema Axispro</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-balance text-foreground md:text-5xl">
            Soluções que atacam o mesmo problema por ângulos diferentes: <span className="text-primary">execução comercial falha.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Em vez de ferramentas soltas, a Axispro constrói uma camada operacional para responder melhor, prospectar com método, disciplinar comunicação e sustentar rotina com inteligência aplicada.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group rounded-[1.75rem] border border-primary/10 bg-card/95 shadow-[0_14px_40px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_55px_rgba(111,44,143,0.14)]"
            >
              <CardHeader className="pb-4">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Resultado
                  </span>
                </div>

                <CardTitle className="text-2xl font-black tracking-tight text-card-foreground">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-primary">
                  {product.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>
                <div className="rounded-2xl border border-primary/10 bg-primary/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Impacto direto</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-foreground">{product.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

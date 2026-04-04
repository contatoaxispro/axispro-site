import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

const bullets = [
  "Leitura direta dos gargalos que estão travando resposta, rotina e acompanhamento",
  "Priorização prática do que faz sentido otimizar primeiro com IA",
  "Visão mais clara de onde sua empresa perde tempo e oportunidade hoje",
]

export function Contact() {
  return (
    <section id="contato" className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f0fb_100%)] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.1rem] border border-[#1a1226] bg-[#090611] text-white shadow-[0_35px_90px_rgba(8,5,15,0.22)]">
          <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Próximo passo</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                Se a execução falha, a oportunidade escapa.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/74">
                A Axispro entra para otimizar processos com IA, reduzir atraso operacional e dar consistência ao que hoje
                depende demais de tempo, memória e esforço humano.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_18px_45px_rgba(126,58,242,0.34)] transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90"
                  asChild
                >
                  <a href="https://wa.me/555496471530?text=Quero%20entender%20onde%20minha%20opera%C3%A7%C3%A3o%20est%C3%A1%20perdendo%20tempo%20e%20oportunidade" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar com a Axispro
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-white/14 bg-transparent px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#090611]"
                  asChild
                >
                  <a href="#ecossistema">
                    Ver soluções
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">O que você recebe</p>
              <div className="mt-6 space-y-4">
                {bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm leading-6 text-white/80">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-primary/18 bg-primary/10 p-5">
                <p className="text-lg font-semibold leading-relaxed text-white">
                  Não criamos sistemas. <span className="text-primary">Otimizamos processos com IA</span> para empresas
                  que querem parar de perder oportunidade por falha de execução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

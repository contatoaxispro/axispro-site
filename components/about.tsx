import { Cpu, Zap, BarChart3 } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Tecnologia aplicada ao crescimento das empresas
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A Axispro Inteligência Corporativa cria sistemas e automações que ajudam empresas a organizar processos, melhorar comunicação e operar com mais eficiência.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nossas plataformas conectam dados, atendimento e operação em soluções simples, estruturadas e escaláveis.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O objetivo é transformar tecnologia em ferramentas práticas que aumentam produtividade, reduzem esforço manual e trazem mais controle para o negócio.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Automação Inteligente</h3>
              <p className="text-muted-foreground text-sm">
                Processos automatizados que eliminam tarefas manuais repetitivas
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Operação Eficiente</h3>
              <p className="text-muted-foreground text-sm">
                Sistemas que otimizam tempo e recursos da sua empresa
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Controle Total</h3>
              <p className="text-muted-foreground text-sm">
                Visibilidade completa sobre dados, processos e resultados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

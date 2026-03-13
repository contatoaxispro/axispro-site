import { Search, Settings, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Entendemos o processo da empresa",
    description: "Analisamos como sua empresa funciona e identificamos oportunidades de melhoria",
    icon: Search,
  },
  {
    number: "02",
    title: "Configuramos a solução Axispro",
    description: "Implementamos a plataforma adequada às necessidades do seu negócio",
    icon: Settings,
  },
  {
    number: "03",
    title: "Sua empresa opera com mais controle",
    description: "Resultados práticos desde o primeiro dia de uso com automação e organização",
    icon: Rocket,
  },
]

export function Process() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Processo</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples para transformar a operação da sua empresa
          </p>
        </div>

        {/* Steps - Timeline vertical para mobile, horizontal para desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative group">
                  {/* Card */}
                  <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    {/* Number */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Timeline vertical */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Timeline line and number */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

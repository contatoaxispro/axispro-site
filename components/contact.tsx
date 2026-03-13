import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Fale com a Axispro
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />

          {/* Content */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Se você quer organizar processos, melhorar atendimento ou automatizar operações da sua empresa, fale conosco.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <a href="https://wa.me/5548991142268" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-6 w-6" />
              Conversar no WhatsApp
            </a>
          </Button>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Resposta rápida
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Atendimento personalizado
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

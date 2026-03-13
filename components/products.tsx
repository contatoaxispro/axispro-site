import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, MessageSquare, ShoppingBag, Headphones, Radio, Scale } from "lucide-react"

const products = [
  {
    name: "Axispro Prospecta",
    tagline: "Sistema de prospecção comercial automatizada.",
    description:
      "O Prospecta identifica empresas com potencial de negócio, coleta e organiza dados relevantes e inicia contatos estratégicos por canais como WhatsApp, e-mail e redes profissionais. Utilizando automação e inteligência artificial, o Prospecta qualifica leads e alimenta continuamente o funil de vendas, permitindo gerar oportunidades de forma previsível e escalável.",
    icon: Target,
  },
  {
    name: "Axispro Pulse",
    tagline: "Plataforma SaaS para gestão estratégica de comunicação via WhatsApp.",
    description:
      "O Pulse organiza a base de contatos, define cadência segura de mensagens e padroniza o processo de contato comercial. Com ele, o WhatsApp deixa de ser um canal improvisado e passa a operar como um processo estruturado, previsível e escalável, reduzindo riscos de bloqueio e aumentando a eficiência da comunicação com clientes.",
    icon: MessageSquare,
  },
  {
    name: "Axispro Live Bot",
    tagline: "Ferramenta de automação para vendas realizadas em lives no Instagram.",
    description:
      "O Live Bot captura automaticamente pedidos feitos nos comentários quando o cliente escreve \"quero + código\". Ele registra usuário, produto e observações em uma planilha em tempo real, eliminando anotações manuais e evitando perda de pedidos durante transmissões ao vivo.",
    icon: ShoppingBag,
  },
  {
    name: "Axispro VOX",
    tagline: "Secretaria inteligente de comunicação empresarial.",
    description:
      "O VOX recebe mensagens, interpreta solicitações e direciona cada demanda para o lugar correto dentro da empresa. Funcionando continuamente, ele garante que nenhuma informação importante se perca e mantém a empresa sempre disponível para clientes e parceiros.",
    icon: Headphones,
  },
  {
    name: "Axispro Broadcast",
    tagline: "Plataforma de comunicação centralizada para empresas.",
    description:
      "Utilizando um número mestre, uma mensagem enviada uma única vez pode ser distribuída automaticamente para diversos grupos. Isso facilita o trabalho das equipes comercial e de marketing, reduz esforço operacional e garante comunicação rápida e consistente.",
    icon: Radio,
  },
  {
    name: "Orchestra",
    tagline: "Sistema inteligente para gestão de movimentações processuais.",
    description:
      "O Orchestra lê automaticamente notas, intimações e movimentações jurídicas, interpreta o conteúdo e indica claramente o que precisa ser feito em cada caso. Ele organiza prazos, tarefas e informações em um único lugar, reduzindo trabalho manual e diminuindo o risco de erros.",
    icon: Scale,
  },
]

export function Products() {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Produtos Axispro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções inteligentes para automatizar e organizar a operação da sua empresa
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6 shadow-[0_6px_18px_rgba(111,44,143,0.22)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group border border-primary/12 bg-card/95 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(111,44,143,0.10)] hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/12 flex items-center justify-center mb-4 group-hover:bg-primary/18 transition-colors duration-300">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>

                <CardTitle className="text-xl font-bold text-card-foreground">
                  {product.name}
                </CardTitle>

                <CardDescription className="text-primary font-medium">
                  {product.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  ecossistema: [
    { name: "Prospecta", href: "#ecossistema" },
    { name: "Pulse", href: "#ecossistema" },
    { name: "VOX", href: "#ecossistema" },
    { name: "Broadcast", href: "#ecossistema" },
  ],
  navegacao: [
    { name: "Visão", href: "#sobre" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#09050f] text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Image
              src="/images/logo-axispro-light.png"
              alt="AxisPro Inteligência Corporativa"
              width={220}
              height={58}
              className="h-auto w-[190px] object-contain object-left drop-shadow-[0_0_20px_rgba(255,255,255,0.06)] md:w-[220px]"
            />
            <p className="mt-5 max-w-md text-sm leading-6 text-background/68">
              Otimizamos processos com IA para empresas que querem parar de perder oportunidade por falha de execução,
              atraso operacional e dependência excessiva do manual.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-primary hover:bg-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/axispro_inteligencia"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-primary hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-background/55">Ecossistema</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.ecossistema.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 transition hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-background/55">Navegação</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 transition hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-background/55">Contato</h4>
            <div className="mt-5 space-y-4 text-sm text-background/70">
              <a href="https://wa.me/555496471530" target="_blank" rel="noopener noreferrer" className="block transition hover:text-primary">
                WhatsApp comercial
              </a>
              <a href="mailto:contatoaxispro@gmail.com" className="block transition hover:text-primary">
                contatoaxispro@gmail.com
              </a>
              <p className="max-w-xs leading-6">
                Processos melhores, resposta mais rápida e menos oportunidade escapando da sua operação.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-6 text-sm text-background/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AxisPro Inteligência Corporativa. Todos os direitos reservados.</p>
          <p>Mais velocidade operacional, mais previsibilidade e menos perda na execução.</p>
        </div>
      </div>
    </footer>
  )
}

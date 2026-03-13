import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  produtos: [
    { name: "Prospecta", href: "#produtos" },
    { name: "Pulse", href: "#produtos" },
    { name: "Live Bot", href: "#produtos" },
    { name: "VOX", href: "#produtos" },
    { name: "Broadcast", href: "#produtos" },
    { name: "Orchestra", href: "#produtos" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Como Funciona", href: "#processo" },
  ],
  suporte: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Documentação", href: "#" },
    { name: "Status do Sistema", href: "#" },
    { name: "Fale Conosco", href: "#contato" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-semibold tracking-tight">AxisPro</span>
                <p className="text-xs text-background/50 uppercase tracking-widest">Inteligência Corporativa</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
              Desenvolvemos plataformas de automação e inteligência aplicada para organizar comunicação, processos e operações empresariais.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Produtos</h4>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte e Contato */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Suporte</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5548991142268"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="mailto:contatoaxispro@gmail.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} AxisPro Inteligência Corporativa. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-background transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

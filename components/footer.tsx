import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"

const taglines = [
  { plain: "Tecnologia que trabalha", highlight: "para você." },
  { plain: "Inteligência que entende", highlight: "seu negócio." },
  { plain: "Resultados que impulsionam", highlight: "seu crescimento." },
]

export function Footer() {
  return (
    <footer className="bg-[#060809] border-t border-orange-500/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Taglines */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            {taglines.map(({ plain, highlight }, i) => (
              <div key={i} className="flex items-center gap-4">
                <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                  {plain}{" "}
                  <span className="text-orange-500 font-semibold">{highlight}</span>
                </p>
                {i < taglines.length - 1 && (
                  <div className="hidden sm:block w-px h-4 bg-orange-500/30" />
                )}
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2e900f2f-ae13-4ad3-917f-507822d85e04-4OfxUg4XNJCs7K3IgSDUdNO7ZHAyR2.jpg"
              alt="AxisPRO - Inteligência que Move Resultados"
              width={180}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} AxisPRO Inteligência Corporativa. Todos os direitos reservados.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/axispro-intelig%C3%AAncia-corporativa-b110bb3b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/axispro_inteligencia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

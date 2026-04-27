"use client"

import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#080a0e] border-t border-orange-500/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-6">

        {/* ÍCONES */}
        <div className="flex items-center gap-6">
          
          <a
            href="https://www.linkedin.com/in/axispro-intelig%C3%AAncia-corporativa-b110bb3b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/axispro_inteligencia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>

        </div>

        {/* TEXTO */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} AxisPRO. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Contato", href: "#cta" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8,10,14,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(249,115,22,0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2e900f2f-ae13-4ad3-917f-507822d85e04-4OfxUg4XNJCs7K3IgSDUdNO7ZHAyR2.jpg"
            alt="AxisPRO - Inteligência que Move Resultados"
            width={180}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-400 hover:text-orange-400 text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}

          {/* BOTÃO CORRIGIDO */}
          <a
            href="https://wa.me/555496471530?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm px-5 py-2 rounded-lg transition-all duration-200 tracking-wide"
            style={{ boxShadow: "0 0 15px rgba(249,115,22,0.35)" }}
          >
            Falar com Especialista
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(8,10,14,0.98)",
            borderBottom: "1px solid rgba(249,115,22,0.15)",
          }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors py-1"
            >
              {label}
            </a>
          ))}

          {/* BOTÃO MOBILE CORRIGIDO */}
          <a
            href="https://wa.me/555496471530?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="bg-orange-500 text-black font-bold text-sm px-5 py-3 rounded-lg text-center transition-all duration-200"
          >
            Falar com Especialista
          </a>
        </div>
      )}
    </header>
  )
}
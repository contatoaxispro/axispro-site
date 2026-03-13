"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <div className="mb-4 animate-fade-in">
            <Image
              src="/images/logo-axispro.png"
              alt="AxisPro - Inteligência Corporativa"
              width={280}
              height={120}
              className="h-auto w-[200px] md:w-[280px]"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl text-balance leading-tight">
            Automação e Inteligência para Empresas que Querem Crescer
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            A Axispro desenvolve plataformas que organizam comunicação, processos e operações empresariais utilizando automação e inteligência aplicada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conhecer Soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-medium transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/5548991142268" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

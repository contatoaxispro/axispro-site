"use client"

import Image from "next/image"

export function AiVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#020812] py-28 lg:py-36">
      
      <Image
        src="/images/ai-vision-bg.png"
        alt="Fundo tecnológico AxisPRO"
        fill
        className="object-cover object-center opacity-80"
      />

      <div className="absolute inset-0 bg-[#020812]/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 text-center">
        
        <h2 className="mb-20 text-4xl font-black leading-tight text-white md:text-5xl">
          Nossa visão sobre IA
        </h2>

        <div className="mx-auto max-w-4xl space-y-10 text-lg leading-relaxed text-gray-200 md:text-xl">
          
          <p>
            Inteligência Artificial não substitui pessoas.{" "}
            <span className="text-orange-500">Ela potencializa pessoas.</span>
          </p>

          <p>
            Nós acreditamos que a IA no ambiente corporativo veio para{" "}
            <span className="text-orange-500">multiplicar a capacidade</span>{" "}
            de quem sabe utilizá-la.
          </p>

          <p>
            Empresas sempre evoluíram com novas ferramentas. Primeiro vieram as
            máquinas, depois os computadores, depois os sistemas de gestão.
            Agora entramos em uma nova fase:{" "}
            <span className="text-orange-500">
              a era da inteligência aplicada ao trabalho.
            </span>
          </p>

          {/* FRASE COM ASPAS */}
          <div className="pt-12 flex justify-center">
            <div className="relative max-w-3xl px-8 py-8 rounded-2xl border border-orange-500/20 bg-white/[0.02] backdrop-blur-sm">

              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                  Acreditamos
                </span>
              </div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-200 text-center">
                "O futuro não será dominado pela inteligência artificial.
              </p>

              <p className="mt-4 text-xl md:text-2xl font-semibold leading-relaxed text-orange-400 text-center">
                Será conduzido por quem sabe trabalhar com ela."
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
"use client"

export function AiVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#020812] py-28 lg:py-36">

      {/* BASE ESCURA PROFUNDA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,10,22,0.95),rgba(2,8,18,1)_70%)]" />

      {/* GLOW CENTRAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.18),transparent_55%)] blur-2xl" />

      {/* ONDAS TECNOLÓGICAS */}
      <div className="absolute bottom-0 left-0 right-0 h-[70%] opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.25),transparent_45%)] blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.2),transparent_50%)] blur-xl" />
      </div>

      {/* GRID 3D SUAVE */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60%] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(249,115,22,0.8) 1px, transparent 1.8px)",
          backgroundSize: "22px 22px",
          transform: "perspective(900px) rotateX(65deg) scale(1.4)",
          transformOrigin: "bottom center",
          maskImage:
            "linear-gradient(to top, black 0%, black 45%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 45%, transparent 85%)",
        }}
      />

      {/* PARTÍCULAS LEVES */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(249,115,22,0.6) 1px, transparent 2px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* LINHAS TECNOLÓGICAS ESQUERDA */}
      <div className="absolute left-0 top-0 hidden h-[480px] w-[420px] opacity-60 lg:block">
        <div className="absolute left-0 top-20 h-px w-52 bg-orange-500/50" />
        <div className="absolute left-0 top-48 h-px w-64 bg-orange-500/40" />
        <div className="absolute left-0 top-72 h-px w-56 bg-orange-500/30" />

        <div className="absolute left-52 top-[76px] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,1)]" />
        <div className="absolute left-60 top-[188px] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,1)]" />
      </div>

      {/* LINHAS TECNOLÓGICAS DIREITA */}
      <div className="absolute right-0 top-0 hidden h-[480px] w-[380px] opacity-40 lg:block">
        <div className="absolute right-0 top-28 h-px w-56 bg-orange-500/40" />
        <div className="absolute right-0 top-60 h-px w-64 bg-orange-500/30" />

        <div className="absolute right-56 top-[104px] h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.9)]" />
        <div className="absolute right-64 top-[236px] h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.9)]" />
      </div>

      {/* TRANSIÇÕES SUAVES */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080a0e] via-[#050b14]/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-b from-transparent via-[#030812]/70 to-[#080a0e]" />

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="mb-20 text-center text-4xl font-black leading-tight text-white md:text-5xl">
          Nossa visão sobre IA
        </h2>

        <div className="mx-auto max-w-6xl space-y-10 text-xl leading-relaxed text-gray-100 md:text-2xl">
          <p>
            Inteligência Artificial não substitui pessoas.{" "}
            <span className="text-orange-500">Ela potencializa pessoas.</span>
          </p>

          <p>
            Nós acreditamos que a IA no ambiente corporativo, veio para{" "}
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

          <div className="pt-2">
            <p className="mb-8 font-semibold text-white">Acreditamos:</p>

            <p className="max-w-5xl text-3xl font-medium leading-snug text-white md:text-4xl">
              O futuro não será dominado pela Inteligência artificial.
              <br />
              Será dominado por pessoas que sabem trabalhar com a IA
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
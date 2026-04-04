import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/555496471530?text=Quero%20consultar%20um%20especialista%20da%20Axispro"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar especialista pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-3 rounded-full bg-[#17b44a] px-5 text-[15px] font-semibold text-white shadow-[0_20px_45px_rgba(23,180,74,0.32)] transition hover:scale-[1.02] hover:bg-[#14a243] md:bottom-7 md:right-7 md:h-16 md:px-7 md:text-lg"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span>Consultar Especialista</span>
    </a>
  )
}

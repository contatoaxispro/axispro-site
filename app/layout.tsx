import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Axispro | Inteligência Corporativa",
  description:
    "Axispro constrói produtos digitais e estruturas operacionais para ajudar empresas a organizar vendas, atendimento, comunicação e execução do dia a dia com mais controle, clareza e escala.",
  keywords: ["software corporativo", "WhatsApp Business", "CRM", "automação", "gestão operacional"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HF352YKMNE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HF352YKMNE');
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  )
}

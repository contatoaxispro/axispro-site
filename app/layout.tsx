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
  title: "AxisPro Inteligência Corporativa | Processos otimizados com IA para vender melhor",
  description:
    "A Axispro otimiza processos com IA para empresas que querem parar de perder oportunidade por falha de execução, atraso operacional e excesso de dependência humana.",
  keywords:
    "IA para empresas, otimização de processos, inteligência corporativa, WhatsApp empresarial, prospecção automatizada, execução comercial, operação comercial",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
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
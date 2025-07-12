import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "منصة - فلنبن انفسنا",
  description: "منصة خاصة للشيخ محمد ياسر ابوردن لتعليم فقه الدين وتزكية النفس",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M5E5GN5E2R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M5E5GN5E2R');
          `}
        </Script>
      </head>
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}

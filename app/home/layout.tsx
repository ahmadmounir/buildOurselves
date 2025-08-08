import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "منصة - فلنبن انفسنا",
  description: "منصة خاصة للشيخ محمد ياسر ابوردن لتعليم فقه الدين وتزكية النفس",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
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
      
      {/* Scroll Animations Fallback */}
      <Script src="/scroll-animations.js" strategy="afterInteractive" />
      
      <Header />
      {children}
      <Footer />
    </>
  )
}

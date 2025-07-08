import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"

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
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}

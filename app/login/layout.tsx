import { Metadata } from "next";
import type React from "react"
import { Tajawal } from "next/font/google"
import "../globals.css"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
})

export const metadata: Metadata = {
    title: "تسجيل الدخول - فلنبن انفسنا",
    description: "تسجيل الدخول للمنصة",
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
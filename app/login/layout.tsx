import { Metadata } from "next";
import type React from "react"

export const metadata: Metadata = {
    title: "تسجيل الدخول - فلنبن انفسنا",
    description: "تسجيل الدخول للمنصة",
} 

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>{children}</div>
    )
  }
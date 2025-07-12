import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useRef } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SHEIKH_WHATSAPP = process.env.NEXT_PUBLIC_SHEIKH_WHATSAPP

export function getWhatsAppLink(message?: string) {
  const baseUrl = "https://wa.me"
  const number = SHEIKH_WHATSAPP
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : ""
  return `${baseUrl}/${number}${encodedMessage}`
}

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10')
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])
}

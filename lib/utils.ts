import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


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



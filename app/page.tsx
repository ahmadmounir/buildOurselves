// app/page.tsx or app/landing/page.tsx
import { redirect } from "next/navigation"

// Disable static generation to ensure dynamic redirects work properly
export const dynamic = 'force-dynamic'

export default function LandingPage() {
  redirect("/home") // This triggers a server-side redirect
}
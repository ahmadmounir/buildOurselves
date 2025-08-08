// app/page.tsx or app/landing/page.tsx
import { redirect } from "next/navigation"

export default function LandingPage() {
  redirect("/home") // This triggers a server-side redirect
}
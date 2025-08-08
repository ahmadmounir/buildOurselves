"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import heroImg from "@/public/logo.svg"
import Image from "next/image"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      console.log("Login response:", data, error)

      if (error) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة")
        setIsLoading(false)
        return
      }

      if (data.user) {
        // Force navigation with refresh to ensure auth state is properly updated
        window.location.href = "/admin/dashboard"
        // If for some reason the above doesn't work, we also try router.push
        // router.push is kept as a fallback but may not force a complete refresh
        setTimeout(() => {
          router.push("/admin/dashboard")
        }, 500)
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("حدث خطأ أثناء تسجيل الدخول")
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 rounded-2xl shadow-2xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8 md:border-l" onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-[var(--primary-color-1)]">تسجيل الدخول</h1>
                <p className="text-muted-foreground text-balance">يرجى ملئ جميع الحقول</p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                className="border border-gray-300 focus-visible:border-[var(--primary-color-2)]"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input
                className="border border-gray-300 focus-visible:border-[var(--primary-color-2)]"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <Button 
                type="submit" 
                className="bg-[var(--primary-color-1)] hover:bg-[var(--primary-color-2)]"
                disabled={isLoading}
              >
                {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </Button>
              <a
                href="https://wa.me/905389153020?text=السلام عليكم ورحمه الله وبركاته لقد نسيت كلمةالمرور - فلنبن انفسنا"
                className="ml-auto text-sm underline-offset-2 hover:underline"
                target="_blank"
              >
                نسيت كلمة المرور؟
              </a>
            </div>
          </form>

          <div className="bg-muted relative hidden md:block">
            <Image
              src={heroImg}
              alt="صورة تعليمية للشيخ"
              className="absolute inset-0 h-full w-full object-cover p-20"
              fill
              fetchPriority="high"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
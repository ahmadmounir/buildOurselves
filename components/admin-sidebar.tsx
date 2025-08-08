"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/ui/sidebar"
import { 
  LayoutDashboard, 
  Building2, 
  Settings, 
  Menu,
} from "lucide-react"

const sidebarItems = [
  {
    title: "لوحة التحكم",
    href: "/admin/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "المساجد",
    href: "/admin/mosques",
    icon: Building2
  },
  {
    title: "الإعدادات",
    href: "/admin/settings",
    icon: Settings
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-l bg-card h-screen">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="border-b px-6 py-4">
          <Link href="/home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Menu className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold">فلنبن أنفسنا</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="text-xs text-muted-foreground text-center">
            © 2024 بناء أنفسنا
          </div>
        </div>
      </div>
    </Sidebar>
  )
}

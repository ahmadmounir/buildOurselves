'use client'

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"
import { getWhatsAppLink } from "@/lib/utils"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </Button>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden fixed left-0 right-0 top-[86px] bg-white border-t shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#teacher" 
              className="link-hover block px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              المعلم
            </Link>
            <Link 
              href="#statistics" 
              className="link-hover block px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              احصائياتنا
            </Link>
            <Link 
              href="#schedule" 
              className="link-hover block px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              جدول الدروس
            </Link>
            <Link 
              href="#posts" 
              className="link-hover block px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              الدروس المسجلة
            </Link>
            <Link 
              href={getWhatsAppLink("السلام عليكم ورحمة الله وبركاته")}
              className="block px-2 py-1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full bg-[var(--primary-color-1)] hover:bg-[var(--primary-color-2)]">
                تواصل مع الشيخ
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
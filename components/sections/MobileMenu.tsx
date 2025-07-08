'use client'

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
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
      <div className={`md:hidden absolute left-0 right-0 top-[100%] bg-white border-t ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="link-hover block px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              المميزات
            </Link>
            <Link 
              href="#testimonials" 
              className="link-hover block px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              آراء العملاء
            </Link>
            <Link 
              href="#posts" 
              className="link-hover block px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              المقالات
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
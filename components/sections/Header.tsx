import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.svg"
import { Button } from "../ui/button"
import { MobileMenu } from "./MobileMenu"
import { getWhatsAppLink } from "@/lib/utils"

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Image src={logo} alt="logo" width={54} height={54} />
          </div>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="#teacher" className="link-hover">
              المعلم
            </Link>
            <Link href="#statistics" className="link-hover">
              احصائياتنا
            </Link>
            <Link href="#schedule" className="link-hover">
              جدول الدروس
            </Link>
            <Link href="#posts" className="link-hover">
              الدروس المسجلة
            </Link>
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <Link className="hidden md:block" href={getWhatsAppLink("السلام عليكم ورحمة الله وبركاته")} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[var(--primary-color-1)] hover:bg-[var(--primary-color-2)]">تواصل مع الشيخ</Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
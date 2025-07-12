import { Facebook, Youtube, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logoLight from "@/public/logo-light.svg"

const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5 fill-current"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const XIcon = () => (

<svg    
  viewBox="0 0 1200 1227"
  className="w-4 h-5 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  focusable="false"
>
  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
</svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Image src={logoLight} className="mb-1" alt="logo" width={40} height={40} />
              <span className="text-xl font-bold">فلنبن انفسنا</span>
            </div>
            <p className="text-gray-400 mt-0">منصة تعليمية إسلامية متكاملة</p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="https://www.facebook.com/Lets.build.ourselves" aria-label="Facebook Lets build ourselves" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.tiktok.com/@s.yaser1" aria-label="TikTok Lets build ourselves" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <TikTokIcon />
              </Link>
              <Link href="https://www.youtube.com/@m-yaserhoca4045" aria-label="YouTube Lets build ourselves" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/sheikh_m_yasser" aria-label="Instagram Lets build ourselves" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://x.com/Sh_MohamedYaser" aria-label="X (Twitter) Lets build ourselves" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <XIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">المنتج</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/#teacher" className="link-hover text-gray-400 transition-colors">
                  المعلم
                </Link>
              </li>
              <li>
                <Link href="/#statistics" className="link-hover text-gray-400 transition-colors">
                  احصائياتنا
                </Link>
              </li>
              <li>
                <Link href="/#schedule" className="link-hover text-gray-400 transition-colors">
                  جدول الدروس
                </Link>
              </li>
              <li>
                <Link href="/#posts" className="link-hover text-gray-400 transition-colors">
                  الدروس المسجلة
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">الدعم</h3>
            <ul className="space-y-2 text-gray-400">
            {/* <li>
                <Link href="/terms" className="link-hover text-gray-400 transition-colors">
                  الشروط
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="link-hover text-gray-400 transition-colors">
                  الخصوصية
                </Link>
              </li> */}
              <li>
                <Link href="https://wa.me/905340863143" target="_blank" rel="noopener noreferrer" className="link-hover text-gray-400 transition-colors">
                  تواصل معنا
                </Link>
              </li>
              {/* <li>
                <Link href="https://wa.me/905389153020" target="_blank" rel="noopener noreferrer" className="link-hover text-gray-400 transition-colors">
                  مركز المساعدة
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p> &copy; {new Date().getFullYear()} فلنبن انفسنا. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
} 
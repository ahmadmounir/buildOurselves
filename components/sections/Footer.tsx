import { Twitter, Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logoLight from "@/public/logo-light.svg"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Image src={logoLight} className="mb-1" alt="logo" width={40} height={40} />
              <span className="text-xl font-bold">فلنبن انفسنا</span>
            </div>
            <p className="text-gray-400 mt-0">بسّط سير عملك وعزز الإنتاجية مع الأتمتة الذكية.</p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[var(--primary-color-2)] transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">المنتج</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  المميزات
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  التكاملات
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  واجهة برمجة التطبيقات
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  الأمان
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">الشركة</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  حولنا
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  الوظائف
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  الصحافة
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">الدعم</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  مركز المساعدة
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  الخصوصية
                </Link>
              </li>
              <li>
                <Link href="#" className="link-hover text-gray-400 transition-colors">
                  الشروط
                </Link>
              </li>
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
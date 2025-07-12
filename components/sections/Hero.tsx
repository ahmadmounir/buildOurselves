import { Check } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image"
import Link from "next/link"
import heroImg from "@/public/images/hero-img.jpg"

export default function Hero({ marginTop }: { marginTop?: string }) {
  return (
    <section className={`py-20 lg:py-32 bg-gray-50 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out ${marginTop}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
                  🕌 منصة تعليمية إسلامية متكاملة
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  فلنبنِ
                  <span className="text-[var(--primary-color-1)]"> أنفسنا</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  رحلة متكاملة في تزكية النفس وتهذيب الروح، مع دروس عملية تجمع بين العلم النافع والتطبيق في حياتك اليومية
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#schedule">
                  <Button size="lg" className="text-lg px-8 bg-[var(--primary-color-1)] hover:bg-[var(--primary-color-2)]">
                    تصفح الدروس
                    <ArrowLeft className="mr-2 w-5 h-5" />
                  </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-[var(--primary-color-2)] text-[var(--primary-color-2)] hover:bg-[var(--primary-color-2)] hover:text-white"
                >
                  شاهد العرض التوضيحي
                </Button> */}
              </div>

              <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-600">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>دكتوراه في الشريعة الإسلامية</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>خبرة تدريسية 25+ عاماً</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>أكثر من 500 طالب وطالبة</span>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-full animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 ease-out delay-300">
              <div className="absolute inset-0 bg-[var(--primary-color-1)] rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto">
                <Image
                  src={heroImg}
                  alt="صورة تعليمية للشيخ"
                  className="object-cover w-full h-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
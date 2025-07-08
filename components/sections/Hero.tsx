import { Check } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image"
import heroImg from "@/public/images/hero-img.jpg"

export default function Hero({ marginTop }: { marginTop?: string }) {
  return (
    <section className={`py-20 lg:py-32 bg-gray-50 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out ${marginTop}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
                  🚀 جديد: الأتمتة المدعومة بالذكاء الاصطناعي
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  بسّط
                  <span className="text-[var(--primary-color-1)]"> سير عملك</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  عزز إنتاجيتك بنسبة 300% مع منصة الأتمتة الذكية. اربط أدواتك، وأتمت المهام المتكررة، وركز على ما يهم
                  حقاً.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-[var(--primary-color-1)] hover:bg-[var(--primary-color-2)]">
                  ابدأ التجربة المجانية
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-[var(--primary-color-2)] text-[var(--primary-color-2)] hover:bg-[var(--primary-color-2)] hover:text-white"
                >
                  شاهد العرض التوضيحي
                </Button>
              </div>

              <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-600">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>تجربة مجانية لمدة 14 يوم</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>لا حاجة لبطاقة ائتمان</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>إلغاء في أي وقت</span>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-full animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 ease-out delay-300">
              <div className="absolute inset-0 bg-[var(--primary-color-1)] rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative w-full aspect-[4/3] max-w-[700px] mx-auto">
                <Image
                  src={heroImg}
                  alt="لوحة تحكم فلنبن انفسنا"
                  className="object-cover w-full h-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
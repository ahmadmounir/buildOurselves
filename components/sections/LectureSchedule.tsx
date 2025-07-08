import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function LectureSchedule() {
  return (
    <section className="py-20 bg-gray-50 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
            جدول المحاضرات
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">المحاضرات القادمة</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تابع جدول المحاضرات والدروس القادمة في المساجد المختلفة واحجز مكانك
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Lecture Card 1 - Right Side */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 cursor-pointer group animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 ease-out delay-100"
            onClick={() => window.open("https://maps.google.com/?q=مسجد+النور+الرياض", "_blank")}
          >
            <div className="md:w-1/2 order-2 md:order-1">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[var(--primary-color-1)] text-white">محاضرة</Badge>
                    <div className="text-sm text-gray-500">
                      <Calendar className="w-4 h-4 inline ml-1" />
                      الجمعة 22 ديسمبر 2024
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--primary-color-1)] mb-3 group-hover:text-[var(--primary-color-2)] transition-colors">
                    أحكام الزكاة في الإسلام
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <MapPin className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>مسجد النور - الرياض</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Calendar className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>الجمعة - 22 ديسمبر 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Clock className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>8:00 مساءً - 9:30 مساءً</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    محاضرة شاملة عن أحكام الزكاة وشروطها ومقاديرها في الشريعة الإسلامية
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--primary-color-1)] font-medium">انقر للوصول للموقع</span>
                    <ArrowLeft className="w-4 h-4 text-[var(--primary-color-2)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="مسجد النور"
                  className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-[var(--primary-color-1)]/20 rounded-2xl group-hover:bg-[var(--primary-color-1)]/10 transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Lecture Card 2 - Left Side */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 cursor-pointer group animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 ease-out delay-200"
            onClick={() => window.open("https://maps.google.com/?q=مسجد+الهدى+جدة", "_blank")}
          >
            <div className="md:w-1/2 w-full">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="مسجد الهدى"
                  className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-[var(--primary-color-2)]/20 rounded-2xl group-hover:bg-[var(--primary-color-2)]/10 transition-colors duration-300"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[var(--primary-color-2)] text-white">درس</Badge>
                    <div className="text-sm text-gray-500">
                      <Calendar className="w-4 h-4 inline ml-1" />
                      السبت 23 ديسمبر 2024
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--primary-color-1)] mb-3 group-hover:text-[var(--primary-color-2)] transition-colors">
                    تفسير سورة البقرة - الجزء الثاني
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <MapPin className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>مسجد الهدى - جدة</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Calendar className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>السبت - 23 ديسمبر 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Clock className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>7:00 مساءً - 8:30 مساءً</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    متابعة تفسير سورة البقرة مع التركيز على الآيات المتعلقة بأحكام الأسرة
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--primary-color-1)] font-medium">انقر للوصول للموقع</span>
                    <ArrowLeft className="w-4 h-4 text-[var(--primary-color-2)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Lecture Card 3 - Right Side */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 cursor-pointer group animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 ease-out delay-300"
            onClick={() => window.open("https://maps.google.com/?q=مسجد+الفاروق+الدمام", "_blank")}
          >
            <div className="md:w-1/2 order-2 md:order-1">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[var(--primary-color-1)] text-white">ندوة</Badge>
                    <div className="text-sm text-gray-500">
                      <Calendar className="w-4 h-4 inline ml-1" />
                      الأحد 24 ديسمبر 2024
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--primary-color-1)] mb-3 group-hover:text-[var(--primary-color-2)] transition-colors">
                    الأخلاق الإسلامية في التعامل
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <MapPin className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>مسجد الفاروق - الدمام</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Calendar className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>الأحد - 24 ديسمبر 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Clock className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>6:30 مساءً - 8:00 مساءً</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    ندوة تفاعلية حول الأخلاق الإسلامية وتطبيقها في الحياة اليومية والتعامل مع الآخرين
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--primary-color-1)] font-medium">انقر للوصول للموقع</span>
                    <ArrowLeft className="w-4 h-4 text-[var(--primary-color-2)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="مسجد الفاروق"
                  className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-[var(--primary-color-1)]/20 rounded-2xl group-hover:bg-[var(--primary-color-1)]/10 transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Lecture Card 4 - Left Side */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 cursor-pointer group animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 ease-out delay-400"
            onClick={() => window.open("https://maps.google.com/?q=مسجد+الإيمان+مكة", "_blank")}
          >
            <div className="md:w-1/2 w-full">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="مسجد الإيمان"
                  className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-[var(--primary-color-2)]/20 rounded-2xl group-hover:bg-[var(--primary-color-2)]/10 transition-colors duration-300"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[var(--primary-color-2)] text-white">خطبة</Badge>
                    <div className="text-sm text-gray-500">
                      <Calendar className="w-4 h-4 inline ml-1" />
                      الجمعة 29 ديسمبر 2024
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--primary-color-1)] mb-3 group-hover:text-[var(--primary-color-2)] transition-colors">
                    فضل العشر الأواخر من رمضان
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <MapPin className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>مسجد الإيمان - مكة المكرمة</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Calendar className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>الجمعة - 29 ديسمبر 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <Clock className="w-4 h-4 text-[var(--primary-color-2)]" />
                      <span>12:30 ظهراً - 1:00 ظهراً</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    خطبة جمعة مباركة عن فضل العشر الأواخر من رمضان وليلة القدر وأعمالها المستحبة
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--primary-color-1)] font-medium">انقر للوصول للموقع</span>
                    <ArrowLeft className="w-4 h-4 text-[var(--primary-color-2)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[var(--primary-color-1)] text-[var(--primary-color-1)] hover:bg-[var(--primary-color-1)] hover:text-white bg-transparent"
          >
            عرض الجدول الكامل
          </Button>
        </div>
      </div>
    </section>
  )
} 
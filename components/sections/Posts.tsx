import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Play } from "lucide-react"

export default function Posts() {
  return (
    <section id="posts" className="py-20 bg-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
            المحاضرات
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">أحدث المحاضرات والدروس</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            شاهد أحدث المحاضرات والدروس الدينية المفيدة من الشيخ الدكتور محمد أحمد العلي.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* First Lecture */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                <Play className="w-16 h-16 text-gray-400" />
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-[var(--primary-color-1)] text-white">جديد</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>20 ديسمبر 2024</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>45 دقيقة</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">أهمية الصلاة في حياة المسلم</h3>
              <p className="text-gray-600 mb-4">
                محاضرة شاملة عن أهمية الصلاة ومكانتها في الإسلام وأثرها على حياة المؤمن.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">1,250 مشاهدة</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[var(--primary-color-1)] text-[var(--primary-color-1)] hover:bg-[var(--primary-color-1)] hover:text-white bg-transparent"
                >
                  مشاهدة كاملة
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Second Lecture */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                <Play className="w-16 h-16 text-gray-400" />
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-[var(--primary-color-2)] text-white">مميز</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>18 ديسمبر 2024</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>60 دقيقة</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">تفسير سورة الفاتحة - الجزء الأول</h3>
              <p className="text-gray-600 mb-4">
                شرح مفصل لسورة الفاتحة ومعانيها العميقة وأسرارها البلاغية والروحية.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2,100 مشاهدة</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[var(--primary-color-1)] text-[var(--primary-color-1)] hover:bg-[var(--primary-color-1)] hover:text-white bg-transparent"
                >
                  مشاهدة كاملة
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Third Lecture */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                <Play className="w-16 h-16 text-gray-400" />
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-[var(--primary-color-1)] text-white">خطبة</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>15 ديسمبر 2024</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>30 دقيقة</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">بر الوالدين في الإسلام</h3>
              <p className="text-gray-600 mb-4">
                خطبة جمعة مؤثرة عن أهمية بر الوالدين ومكانتهما في الإسلام وحقوقهما على الأبناء.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">3,500 مشاهدة</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[var(--primary-color-1)] text-[var(--primary-color-1)] hover:bg-[var(--primary-color-1)] hover:text-white bg-transparent"
                >
                  مشاهدة كاملة
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[var(--primary-color-1)] text-[var(--primary-color-1)] hover:bg-[var(--primary-color-1)] hover:text-white bg-transparent"
          >
            عرض جميع المحاضرات
          </Button>
        </div>
      </div>
    </section>
  )
} 
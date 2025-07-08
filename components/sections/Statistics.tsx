import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react"

export default function Statistics() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
            إحصائياتنا
          </Badge>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">أرقام تتحدث عن نفسها</h2>
          <p className="mt-2 text-lg text-gray-600">نفخر بخدمة المجتمع الإسلامي من خلال التعليم والإرشاد في المساجد حول العالم.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Years of Experience */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[var(--primary-color-2)] rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-[var(--primary-color-1)] mb-2">+25</CardTitle>
              <CardDescription className="text-gray-600">سنة من الخبرة</CardDescription>
            </CardContent>
          </Card>

          {/* Lectures */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[var(--primary-color-1)] rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-[var(--primary-color-1)] mb-2">+500</CardTitle>
              <CardDescription className="text-gray-600">محاضرة ودرس</CardDescription>
            </CardContent>
          </Card>

          {/* Students */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[var(--primary-color-2)] rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-[var(--primary-color-1)] mb-2">+15,000</CardTitle>
              <CardDescription className="text-gray-600">طالب وطالبة</CardDescription>
            </CardContent>
          </Card>

          {/* Mosques */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[var(--primary-color-1)] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-[var(--primary-color-1)] mb-2">+250</CardTitle>
              <CardDescription className="text-gray-600">مسجد نُدرّس فيه</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 
import { Award, GraduationCap, MapPin, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import shikhImg from "@/public/images/shikh-yaser-childrens.jpg"
import { getWhatsAppLink } from "@/lib/utils";
import Link from "next/link";

export default function TeacherInfo() {
  return (
    <section id="teacher" className="py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
              المعلم
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">نبذة عن الشيخ</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 py-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image loading="lazy" src={shikhImg} alt="صورة الشيخ" fill className="object-cover" />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color-1)] mb-4">{process.env.NEXT_PUBLIC_TEACHER_NAME}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    إمام وخطيب وداعية إسلامي، حاصل على ماجستير في الدعوة الإسلامية ويحضّر حاليًا لنيل درجة الدكتوراه. أتمَّ مسيرة دعوية وتربوية غنية في المساجد والمدارس والمعاهد الشرعية.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <GraduationCap className="w-5 h-5 text-[var(--primary-color-2)]" />
                      <span className="text-sm text-gray-600">دكتوراه في الشريعة</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Award className="w-5 h-5 text-[var(--primary-color-2)]" />
                      <span className="text-sm text-gray-600">25+ سنة خبرة</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <MapPin className="w-5 h-5 text-[var(--primary-color-2)]" />
                      <span className="text-sm text-gray-600">5+ مساجد</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Users className="w-5 h-5 text-[var(--primary-color-2)]" />
                      <span className="text-sm text-gray-600">500+ طالب</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={getWhatsAppLink("السلام عليكم ورحمة الله وبركاته")} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[var(--primary-color-1)] hover:bg-[var(--primary-color-2)]">تواصل مع الشيخ</Button>
                    </Link>
                    {/* <Button
                      variant="outline"
                      className="border-[var(--primary-color-2)] text-[var(--primary-color-2)] hover:bg-[var(--primary-color-2)] hover:text-white bg-transparent"
                    >
                      عرض السيرة الذاتية
                    </Button> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
  )
}
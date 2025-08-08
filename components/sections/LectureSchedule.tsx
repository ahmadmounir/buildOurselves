import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import selcuk from "@/public/images/mosques/selcuk.jpg"
import bilal from "@/public/images/mosques/bilal.jpg"
import anadolu from "@/public/images/mosques/anadolu.jpg"
import hoskur from "@/public/images/mosques/hoskur.png"
import Link from "next/link"

interface LectureTime {
  start: string
  end: string
}


interface Lecture {
  id: number
  type: string
  title: string
  date: string
  day: string
  city: string
  time: LectureTime
  location: string
  mapLocation: string
  description: string
  image: string
  imageAlt: string
}

// Mock data for lectures
const lectures: Lecture[] = [
  {
    id: 1,
    type: "تزكية",
    title: "الادب في طلب العلم",
    date: "اسبوعيا",
    day: "الاثنين",
    city: "اسطنبول",
    time: {
      start: "9:00 مساءً",
      end: "10:30 مساءً"
    },
    location: "جامع سلجوق",
    mapLocation: "https://maps.app.goo.gl/Wo5NZiGmpq8brJan7?g_st=ic",
    description: "درس عن الادب في طلب العلم",
    image: selcuk.src,
    imageAlt: "جامع سلجوق",
  },
  {
    id: 2,
    type: "درس",
    title: "علم الطهارة - الباب الثاني",
    date: "اسبوعيا",
    day: "الثلاثاء",
    city: "اسطنبول",
    time: {
      start: "9:00 مساءً",
      end: "10:30 مساءً"
    },
    location: "جامع بلال الحبشي",
    mapLocation: "https://maps.app.goo.gl/eJXSooZt13vfcAAy9",
    description: "درس عن علم الطهارة - الباب الثاني",
    image: bilal.src,
    imageAlt: "جامع بلال الحبشي",
  },
  {
    id: 3,
    type: "درس",
    title: "تزكية النفس",
    date: "اسبوعيا",
    day: "الجمعة",
    city: "اسطنبول",
    time: {
      start: "9:00 مساءً",
      end: "10:30 مساءً"
    },
    location: "جامع اناضول فاتح ",
    mapLocation: "https://maps.app.goo.gl/eJXSooZt13vfcAAy9",
    description: "درس عن تزكية النفس",
    image: anadolu.src,
    imageAlt: "جامع اناضول فاتح",
  },
  {
    id: 4,
    type: "درس",
    title: "التفسير المبسط للقرآن الكريم",
    date: "شهريا",
    day: "الاحد",
    city: "غازي عنتاب",
    time: {
      start: "9:00 مساءً",
      end: "10:30 مساءً"
    },
    location: "جامع هوشكور",
    mapLocation: "https://maps.app.goo.gl/g8SksjWferzTVDc89?g_st=awb",
    description: "درس عن التفسير المبسط للقرآن الكريم",
    image: hoskur.src,
    imageAlt: "جامع هوشكور",
  }
]

export default function LectureSchedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50 animate-on-scroll">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
            جدول المحاضرات
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">المحاضرات القادمة</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تابع جدول المحاضرات والدروس القادمة في المساجد المختلفة ونورنا بحضورك 
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {lectures.map((lecture, index) => (
            <Link
              key={lecture.id}
              className={`flex flex-col md:flex-row items-stretch gap-8 cursor-pointer group animate-on-scroll translate-x-10`}
              href={lecture.mapLocation}
              target="_blank"
              rel="noopener noreferrer"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 order-2 md:order-1">
                    <LectureCard lecture={lecture} />
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2 w-full h-full">
                    <LectureImage lecture={lecture} />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 w-full h-full">
                    <LectureImage lecture={lecture} />
                  </div>
                  <div className="md:w-1/2">
                    <LectureCard lecture={lecture} />
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[var(--primary-color-1)] text-[var(--primary-color-1)] hover:bg-[var(--primary-color-1)] hover:text-white bg-transparent"
          >
            عرض الجدول الكامل
          </Button>
        </div> */}
      </div>
    </section>
  )
}

// Component for the lecture card
function LectureCard({ lecture }: { lecture: Lecture }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge className={`bg-[var(--primary-color-1)] text-white`}>
            {lecture.type}
          </Badge>
          <div className="text-sm text-gray-500">
            <Calendar className="w-4 h-4 inline ml-1" />
            {lecture.day} {lecture.date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-[var(--primary-color-1)] mb-3 group-hover:text-[var(--primary-color-2)] transition-colors">
          {lecture.title}
        </h3>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
            <MapPin className="w-4 h-4 text-[var(--primary-color-2)]" />
            <span>{lecture.location} - {lecture.city}</span>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
            <Calendar className="w-4 h-4 text-[var(--primary-color-2)]" />
            <span>{lecture.day} - {lecture.date}</span>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
            <Clock className="w-4 h-4 text-[var(--primary-color-2)]" />
            <span>{lecture.time.start} - {lecture.time.end}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          {lecture.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--primary-color-1)] font-medium">انقر للوصول للموقع</span>
          <ArrowLeft className="w-4 h-4 text-[var(--primary-color-2)] group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  )
}

// Component for the lecture image
function LectureImage({ lecture }: { lecture: Lecture }) {
  return (
    <div className="relative h-full min-h-[300px] w-full">
      <Image
        src={lecture.image}
        alt={lecture.imageAlt}
        className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className={`absolute inset-0 bg-[var(--primary-color-1)]/20 rounded-2xl group-hover:bg-[var(--primary-color-1)]/10 transition-colors duration-300`}></div>
    </div>
  )
} 
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LectureService } from "@/lib/lectureService"
import { 
  Lecture as LectureModel, 
  lectureTypeLabels, 
  recurrenceTypeLabels, 
  dayOfWeekLabels 
} from "@/models/lecture"

interface LectureDisplayData {
  id: number
  type: string
  title: string
  date: string
  day: string
  city: string
  time: {
    start: string
    end: string
  }
  location: string
  mapLocation: string
  description: string
  image: string
  imageAlt: string
}

// Helper function to format time from 24h to 12h with Arabic AM/PM
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'مساءً' : 'صباحً';
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};

// Helper function to convert server data to display format
const convertLectureToDisplay = (lecture: LectureModel): LectureDisplayData => {
  return {
    id: lecture.id || 0,
    type: lectureTypeLabels[lecture.type],
    title: lecture.title,
    date: recurrenceTypeLabels[lecture.recurrence],
    day: dayOfWeekLabels[lecture.day_of_week],
    city: lecture.city,
    time: {
      start: formatTime(lecture.time_start),
      end: formatTime(lecture.time_end)
    },
    location: lecture.mosque_name,
    mapLocation: lecture.location_url,
    description: lecture.description || '',
    image: lecture.image_link,
    imageAlt: lecture.mosque_name,
  };
};

export default async function LectureSchedule() {
  let lectures: LectureDisplayData[] = [];
  let error: string | null = null;

  try {
    const lecturesData = await LectureService.getAllLectures();
    lectures = lecturesData.map(convertLectureToDisplay);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch lectures';
    console.error('Error fetching lectures:', err);
  }

  if (error) {
    return (
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">خطأ في تحميل المحاضرات: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (lectures.length === 0) {
    return (
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
              جدول المحاضرات
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">المحاضرات القادمة</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              لا توجد محاضرات متاحة حالياً
            </p>
          </div>
        </div>
      </section>
    );
  }
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
function LectureCard({ lecture }: { lecture: LectureDisplayData }) {
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
function LectureImage({ lecture }: { lecture: LectureDisplayData }) {
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
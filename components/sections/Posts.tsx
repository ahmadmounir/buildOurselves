import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Play } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useState, useCallback } from "react"
import { getYouTubeVideos, type YouTubeVideo } from "@/lib/youtube"
import Image from "next/image"
import Link from "next/link"

export default function Posts() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchVideos = useCallback(async () => {
    try {
      const fetchedVideos = await getYouTubeVideos()
      setVideos(fetchedVideos)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch videos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  if (error) {
    return (
      <section id="posts" className="py bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">
            {error === 'YouTube API key is not configured' 
              ? 'يرجى تكوين مفتاح API لليوتيوب'
              : 'حدث خطأ أثناء تحميل مقاطع الفيديو'}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="posts" className="py-20 bg-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
            المحاضرات
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">أحدث المحاضرات والدروس</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            شاهد أحدث المحاضرات والدروس الدينية المفيدة من {process.env.NEXT_PUBLIC_TEACHER_NAME}.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color-1)]"></div>
          </div>
        ) : (
          <div className="relative rounded-xl overflow-hidden">
            <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{
              paddingBottom: '20px',
              paddingTop: '20px',
            }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <div className="aspect-video">
                      <Link href={`https://www.youtube.com/watch?v=${video.id}`}>
                        <Image 
                          src={video.thumbnail} 
                          alt={video.title}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-t-lg bg-black/20 hover:bg-black/40 transition-colors">
                          <Play className="w-16 h-16 text-white" />
                        </div>
                      </Link>
                      
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[var(--primary-color-2)] text-white">مهم</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(video.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{video.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 truncate">{video.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{video.viewCount} مشاهدة</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[var(--primary-color-1)] text-[var(--primary-color-1)] hover:bg-[var(--primary-color-1)] hover:text-white bg-transparent"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                      >
                        مشاهدة كاملة
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        )}
      </div>
    </section>
  )
} 
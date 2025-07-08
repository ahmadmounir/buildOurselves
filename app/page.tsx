"use client"

import { Badge } from "@/components/ui/badge"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import TeacherInfo from "@/components/sections/TeacherInfo"
import Footer from "@/components/sections/Footer"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import LectureSchedule from "@/components/sections/LectureSchedule"
import Posts from "@/components/sections/Posts"
import Statistics from "@/components/sections/Statistics"


export default function LandingPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const ads = [
    {
      image: "/placeholder.svg?height=400&width=800",
      title: "مؤسسة الأوقاف الإسلامية",
      description: "شريك استراتيجي في نشر التعليم الديني",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      title: "جامعة الأزهر الشريف",
      description: "التعاون في البرامج التعليمية والبحثية",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      title: "رابطة العالم الإسلامي",
      description: "دعم المشاريع التعليمية والدعوية",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      title: "وزارة الأوقاف والشؤون الإسلامية",
      description: "الشراكة في تطوير المناهج التعليمية",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ads.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ads.length) % ads.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <Hero marginTop="mt-[86px]" />

      <TeacherInfo />

      {/* Ads Slider Section */}
      <section className="py-16 bg-gray-50 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="w-fit mx-auto bg-[var(--primary-color-2)]/10 text-[var(--primary-color-1)] border-[var(--primary-color-2)]">
              شركاؤنا
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">الجهات الداعمة والشريكة</h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${currentSlide * 100}%)` }}
              >
                {ads.map((ad, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={ad.image || "/placeholder.svg"}
                        alt={ad.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
                          <p className="text-white/90">{ad.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-[var(--primary-color-1)]" />
            </button>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-[var(--primary-color-1)]" />
            </button>

            <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-[var(--primary-color-1)]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Statistics/>
      
      <LectureSchedule/>
      <Posts/>

      <Footer />

    </div>
  )
}

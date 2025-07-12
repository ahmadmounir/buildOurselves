"use client"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import TeacherInfo from "@/components/sections/TeacherInfo"
import Footer from "@/components/sections/Footer"
import LectureSchedule from "@/components/sections/LectureSchedule"
import Posts from "@/components/sections/Posts"
import Statistics from "@/components/sections/Statistics"
import { useScrollAnimation } from "@/lib/utils"

export default function LandingPage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <Hero marginTop="mt-[86px]" />

      <TeacherInfo />

      <Statistics/>
      
      <LectureSchedule/>
      <Posts/>

      <Footer />

    </div>
  )
}

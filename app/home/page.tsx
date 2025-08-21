import Hero from "@/components/sections/Hero"
import TeacherInfo from "@/components/sections/TeacherInfo"
import LectureSchedule from "@/components/sections/LectureSchedule"
import Posts from "@/components/sections/Posts"
import Statistics from "@/components/sections/Statistics"

// Disable static generation for this page to ensure fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function LandingPage() {

  return (
    <div className="min-h-screen">
      <Hero marginTop="mt-[86px]" />

      <TeacherInfo /> 

      <Statistics/>
      
      <LectureSchedule/>
      <Posts/>
    </div>
  )
}
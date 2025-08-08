'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, MessageSquare, Building2 } from "lucide-react"


const stats = [
    {
      title: "عدد الزيارات",
      value: "12,543",
      description: "زيارة هذا الشهر",
      icon: Eye,
      change: "+12%",
    },
    {
      title: "الرسائل",
      value: "89",
      description: "رسالة جديدة",
      icon: MessageSquare,
      change: "+5%",
    },
    {
      title: "المساجد",
      value: "24",
      description: "مسجد مسجل",
      icon: Building2,
      change: "+2",
    }
  ]

export default function DashboardPage() {

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">لوحة التحكم</h2>
        <p className="text-muted-foreground">نظرة عامة على إحصائيات الموقع</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card className="py-4" key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <div className="text-xs text-green-600 mt-1">{stat.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* <Card className="py-4">
          <CardHeader>
            <CardTitle>الزيارات الأخيرة</CardTitle>
            <CardDescription>إحصائيات الزيارات خلال الأسبوع الماضي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "الأحد", visits: 1234 },
                { day: "الاثنين", visits: 1456 },
                { day: "الثلاثاء", visits: 1123 },
                { day: "الأربعاء", visits: 1789 },
                { day: "الخميس", visits: 1567 },
                { day: "الجمعة", visits: 2134 },
                { day: "السبت", visits: 1890 },
              ].map((item) => (
                <div key={item.day} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.day}</span>
                  <span className="text-sm text-muted-foreground">{item.visits}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        {/* <Card className="py-4">
          <CardHeader>
            <CardTitle>الرسائل الحديثة</CardTitle>
            <CardDescription>آخر الرسائل المستلمة من المستخدمين</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "أحمد محمد", message: "استفسار عن مواعيد الدروس", time: "منذ ساعة" },
                { name: "فاطمة علي", message: "طلب إضافة مسجد جديد", time: "منذ ساعتين" },
                { name: "محمد حسن", message: "شكر وتقدير للموقع", time: "منذ 3 ساعات" },
                { name: "عائشة أحمد", message: "استفسار عن الموقع", time: "منذ 4 ساعات" },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  )
}

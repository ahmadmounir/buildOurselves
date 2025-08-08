"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog"
import { Plus, Edit2, Trash2, MapPin } from "lucide-react"

// Mock data for mosques
const initialMosques = [
  {
    id: "fsdf34fsdf",
    type: "تزكية",
    title: "الادب في طلب العلم",
    date: "اسبوعيا",
    day: "الاثنين",
    city: "اسطنبول",
    time: {
      start: "9:00 مساءً",
      end: "10:30 مساءً"
    },
    mosqueName: "جامع سلجوق",
    location: "https://maps.app.goo.gl/Wo5NZiGmpq8brJan7?g_st=ic",
    description: "درس عن الادب في طلب العلم",
    image: "/images/mosques/selcuk.jpg",
    imageAlt: "جامع سلجوق",
  },
  {
    id: "fsdf34fsdf2",
    type: "فقه",
    title: "أحكام الطهارة",
    date: "يوميا",
    day: "الثلاثاء",
    city: "اسطنبول",
    time: {
      start: "8:00 مساءً",
      end: "9:30 مساءً"
    },
    mosqueName: "جامع الأناضول",
    location: "https://maps.app.goo.gl/example2",
    description: "درس في أحكام الطهارة والصلاة",
    image: "/images/mosques/anadolu.jpg",
    imageAlt: "جامع الأناضول",
  }
]

interface Mosque {
  id: string
  type: string
  title: string
  date: string
  day: string
  city: string
  time: {
    start: string
    end: string
  }
  mosqueName: string
  location: string
  description: string
  image: string
  imageAlt: string
}

export default function MosquesPage() {
  const [mosques, setMosques] = useState<Mosque[]>(initialMosques)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMosque, setEditingMosque] = useState<Mosque | null>(null)
  const [formData, setFormData] = useState<Omit<Mosque, 'id'>>({
    type: "",
    title: "",
    date: "",
    day: "",
    city: "",
    time: {
      start: "",
      end: ""
    },
    mosqueName: "",
    location: "",
    description: "",
    image: "",
    imageAlt: "",
  })

  const handleInputChange = (field: string, value: string) => {
    if (field === "timeStart") {
      setFormData(prev => ({
        ...prev,
        time: { ...prev.time, start: value }
      }))
    } else if (field === "timeEnd") {
      setFormData(prev => ({
        ...prev,
        time: { ...prev.time, end: value }
      }))
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingMosque) {
      // Update existing mosque
      setMosques(prev => prev.map(mosque => 
        mosque.id === editingMosque.id 
          ? { ...formData, id: editingMosque.id }
          : mosque
      ))
    } else {
      // Add new mosque
      const newMosque: Mosque = {
        ...formData,
        id: Date.now().toString()
      }
      setMosques(prev => [...prev, newMosque])
    }

    // Reset form and close dialog
    setFormData({
      type: "",
      title: "",
      date: "",
      day: "",
      city: "",
      time: { start: "", end: "" },
      mosqueName: "",
      location: "",
      description: "",
      image: "",
      imageAlt: "",
    })
    setEditingMosque(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (mosque: Mosque) => {
    setEditingMosque(mosque)
    setFormData({
      type: mosque.type,
      title: mosque.title,
      date: mosque.date,
      day: mosque.day,
      city: mosque.city,
      time: mosque.time,
      mosqueName: mosque.mosqueName,
      location: mosque.location,
      description: mosque.description,
      image: mosque.image,
      imageAlt: mosque.imageAlt,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setMosques(prev => prev.filter(mosque => mosque.id !== id))
  }

  const handleAdd = () => {
    setEditingMosque(null)
    setFormData({
      type: "",
      title: "",
      date: "",
      day: "",
      city: "",
      time: { start: "", end: "" },
      mosqueName: "",
      location: "",
      description: "",
      image: "",
      imageAlt: "",
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">إدارة المساجد</h2>
          <p className="text-muted-foreground">إضافة وتعديل وحذف المساجد والدروس</p>
        </div>
        <Button onClick={handleAdd} className="gap-2">
          <Plus className="h-4 w-4" />
          إضافة مسجد جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة المساجد ({mosques.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم المسجد</TableHead>
                <TableHead>عنوان الدرس</TableHead>
                <TableHead>النوع</TableHead>
                <TableHead>المدينة</TableHead>
                <TableHead>اليوم</TableHead>
                <TableHead>الوقت</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mosques.map((mosque) => (
                <TableRow key={mosque.id}>
                  <TableCell className="font-medium">{mosque.mosqueName}</TableCell>
                  <TableCell>{mosque.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{mosque.type}</Badge>
                  </TableCell>
                  <TableCell>{mosque.city}</TableCell>
                  <TableCell>{mosque.day}</TableCell>
                  <TableCell>{mosque.time.start} - {mosque.time.end}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(mosque)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(mosque.location, '_blank')}
                      >
                        <MapPin className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(mosque.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingMosque ? "تعديل المسجد" : "إضافة مسجد جديد"}
            </DialogTitle>
            <DialogClose onClose={() => setIsDialogOpen(false)} />
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mosqueName">اسم المسجد</Label>
                <Input
                  id="mosqueName"
                  value={formData.mosqueName}
                  onChange={(e) => handleInputChange("mosqueName", e.target.value)}
                  placeholder="مثال: جامع السلطان أحمد"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">عنوان الدرس</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="مثال: الأدب في طلب العلم"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">نوع الدرس</Label>
                <Input
                  id="type"
                  value={formData.type}
                  onChange={(e) => handleInputChange("type", e.target.value)}
                  placeholder="مثال: تزكية، فقه، عقيدة"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">المدينة</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="مثال: اسطنبول"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="day">اليوم</Label>
                <Input
                  id="day"
                  value={formData.day}
                  onChange={(e) => handleInputChange("day", e.target.value)}
                  placeholder="مثال: الاثنين"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">التكرار</Label>
                <Input
                  id="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  placeholder="مثال: أسبوعياً، يومياً"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeStart">وقت البداية</Label>
                <Input
                  id="timeStart"
                  value={formData.time.start}
                  onChange={(e) => handleInputChange("timeStart", e.target.value)}
                  placeholder="مثال: 9:00 مساءً"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeEnd">وقت النهاية</Label>
                <Input
                  id="timeEnd"
                  value={formData.time.end}
                  onChange={(e) => handleInputChange("timeEnd", e.target.value)}
                  placeholder="مثال: 10:30 مساءً"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">رابط الموقع</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="رابط خرائط جوجل"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">رابط الصورة</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="/images/mosques/example.jpg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">وصف الدرس</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="وصف مختصر عن محتوى الدرس"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageAlt">وصف الصورة</Label>
              <Input
                id="imageAlt"
                value={formData.imageAlt}
                onChange={(e) => handleInputChange("imageAlt", e.target.value)}
                placeholder="وصف الصورة للمساعدة البصرية"
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                إلغاء
              </Button>
              <Button type="submit">
                {editingMosque ? "تحديث" : "إضافة"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
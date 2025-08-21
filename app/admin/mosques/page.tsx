"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, Edit2, Trash2, MapPin, Clock, Calendar, MoreVertical, ExternalLink } from "lucide-react"
import Image from "next/image"
import ImageUpload from "@/components/ui/image-upload"
import { LectureService } from "@/lib/lectureService"
import {
  Lecture,
  LectureFormData,
  LectureType,
  RecurrenceType,
  DayOfWeek,
  lectureTypeLabels,
  recurrenceTypeLabels,
  dayOfWeekLabels,
  getLectureTypeOptions,
  getRecurrenceTypeOptions,
  getDayOfWeekOptions
} from "@/models/lecture"

export default function MosquesPage() {
  const [lectures, setLectures] = useState<Lecture[]>([])
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingLecture, setEditingLecture] = useState<Lecture | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [formData, setFormData] = useState<LectureFormData>({
    title: "",
    description: "",
    type: LectureType.LESSON,
    recurrence: RecurrenceType.WEEKLY,
    day_of_week: DayOfWeek.FRIDAY,
    mosque_name: "",
    city: "",
    location_url: "",
    time_start: "",
    time_end: "",
    image: undefined
  })

  // Load lectures on component mount
  const loadLectures = async () => {
    try {
      setLoading(true)
      setError(null) // Clear any previous errors
      const data = await LectureService.getAllLectures()
      setLectures(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ في تحميل المحاضرات')
    } finally {
      setLoading(false)
    }
  }

  // Load lectures on component mount
  useEffect(() => {
    loadLectures()
  }, [])

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      type: LectureType.LESSON,
      recurrence: RecurrenceType.WEEKLY,
      day_of_week: DayOfWeek.FRIDAY,
      mosque_name: "",
      city: "",
      location_url: "",
      time_start: "",
      time_end: "",
      image: undefined
    })
    setImagePreview(null)
    setEditingLecture(null)
    setError(null)
  }

  const openAddDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const openEditDialog = (lecture: Lecture) => {
    setFormData({
      title: lecture.title,
      description: lecture.description || "",
      type: lecture.type,
      recurrence: lecture.recurrence,
      day_of_week: lecture.day_of_week,
      mosque_name: lecture.mosque_name,
      city: lecture.city,
      location_url: lecture.location_url,
      time_start: lecture.time_start,
      time_end: lecture.time_end,
      image: undefined
    })
    setImagePreview(lecture.image_link)
    setEditingLecture(lecture)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    resetForm()
  }

  const handleInputChange = (field: keyof LectureFormData, value: string | number | File) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const validateForm = (): string | null => {
    if (!formData.title.trim()) return "العنوان مطلوب"
    if (!formData.mosque_name.trim()) return "اسم المسجد مطلوب"
    if (!formData.city.trim()) return "المدينة مطلوبة"
    if (!formData.location_url.trim()) return "رابط الموقع مطلوب"
    if (!formData.time_start.trim()) return "وقت البداية مطلوب"
    if (!formData.time_end.trim()) return "وقت النهاية مطلوب"
    
    if (formData.time_start >= formData.time_end) {
      return "وقت النهاية يجب أن يكون بعد وقت البداية"
    }

    if (!editingLecture && !formData.image) {
      return "الصورة مطلوبة"
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      if (editingLecture) {
        await LectureService.updateLecture(
          editingLecture.id!,
          formData,
          editingLecture.image_link,
          editingLecture.image_path
        )
      } else {
        await LectureService.createLecture(formData)
      }
      
      await loadLectures()
      closeDialog()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ في حفظ المحاضرة')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (lecture: Lecture) => {
    if (!confirm('هل أنت متأكد من حذف هذه المحاضرة؟')) return

    try {
      await LectureService.deleteLecture(lecture.id!)
      await loadLectures()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ في حذف المحاضرة')
    }
  }

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('ar', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Loading Header */}
        <div className="space-y-1">
          <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-64"></div>
          <div className="h-5 bg-gray-100 rounded animate-pulse w-80"></div>
        </div>
        
        {/* Loading Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-4 space-y-3">
                {/* Header Loading */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-100 rounded animate-pulse w-16"></div>
                  </div>
                </div>
                
                {/* Description Loading */}
                <div className="space-y-1">
                  <div className="h-3 bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-4/5"></div>
                </div>
                
                {/* Info Loading */}
                <div className="space-y-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-100 rounded-md animate-pulse"></div>
                      <div className="h-3 bg-gray-100 rounded animate-pulse flex-1"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-red-800">{error}</p>
          </CardContent>
        </Card>
      )} */}

      <div className="space-y-8">
        {/* Header with count and add button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              إدارة المحاضرات
            </h1>
            <p className="text-muted-foreground text-lg">
              {lectures.length === 0 
                ? "ابدأ في إدارة المحاضرات والدروس الدينية" 
                : `إدارة ${lectures.length} محاضرة مسجلة في النظام`
              }
            </p>
          </div>
          {lectures.length > 0 && (
            <Button 
              onClick={openAddDialog}
              className="text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              إضافة محاضرة جديدة
            </Button>
          )}
        </div>

        {/* Lectures Grid */}
        {lectures.length === 0 ? (
          <Card className="border-dashed border-2 border-gray-200 bg-gray-50/50">
            <CardContent className="flex flex-col items-center justify-center py-20">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 mb-6">
                <Plus className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد محاضرات مسجلة</h3>
              <p className="text-center text-gray-600 max-w-md mb-6 leading-relaxed">
                ابدأ رحلتك في إدارة المحاضرات والدروس الدينية بإضافة أول محاضرة لك في المساجد
              </p>
              <Button 
                onClick={openAddDialog}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Plus className="h-5 w-5 mr-2" />
                إضافة أول محاضرة
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {lectures.map((lecture) => (
              <Card key={lecture.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md hover:-translate-y-1">
                {/* Card Content */}
                <CardContent className="p-4 space-y-3">
                  {/* Header with Image, Title and Badge */}
                  <div className="flex items-center gap-4">
                    {/* Small Image Icon */}
                    <div className="w-[40px] h-[40px]">
                      <Image
                        src={lecture.image_link}
                        alt={lecture.title}
                        width={40}
                        height={40}
                        className="rounded-lg object-cover shadow-sm ring-2 ring-gray-100 w-full h-full"
                      />
                    </div>
                    
                    {/* Title and Badge */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 title={lecture.title} className="font-bold text-lg text-gray-900 leading-tight w-full truncate">
                          {lecture.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {/* Type Badge */}
                          <Badge 
                            variant="secondary" 
                            className="bg-blue-50 text-blue-700 border-blue-200 font-semibold text-xs px-2 py-1"
                          >
                            {lectureTypeLabels[lecture.type]}
                          </Badge>
                          
                          {/* Actions Dropdown */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuItem 
                                onClick={() => window.open(lecture.location_url, '_blank')}
                                className="gap-3 py-2 cursor-pointer"
                              >
                                <ExternalLink className="h-4 w-4" />
                                فتح الموقع
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => openEditDialog(lecture)}
                                className="gap-3 py-2 cursor-pointer"
                              >
                                <Edit2 className="h-4 w-4" />
                                تعديل المحاضرة
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDelete(lecture)}
                                className="gap-3 py-2 text-red-600 focus:text-red-600 cursor-pointer"
                              >
                                <Trash2 className="h-4 w-4" />
                                حذف المحاضرة
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {lecture.description && (
                    <p className="text-sm text-gray-600 leading-relaxed overflow-hidden" style={{ 
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {lecture.description}
                    </p>
                  )}

                  {/* Location Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center justify-center w-6 h-6 bg-blue-50 rounded-md">
                        <MapPin className="h-3 w-3 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-gray-900 text-sm">{lecture.mosque_name}</span>
                        <span className="text-gray-400 mx-1">•</span>
                        <span className="text-gray-600 text-sm">{lecture.city}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center justify-center w-6 h-6 bg-green-50 rounded-md">
                        <Calendar className="h-3 w-3 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 text-sm">{dayOfWeekLabels[lecture.day_of_week]}</span>
                        <span className="text-gray-400 mx-1">•</span>
                        <span className="text-gray-600 text-sm">{recurrenceTypeLabels[lecture.recurrence]}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center justify-center w-6 h-6 bg-purple-50 rounded-md">
                        <Clock className="h-3 w-3 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 text-sm">
                          {formatTime(lecture.time_start)} - {formatTime(lecture.time_end)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingLecture ? "تعديل المحاضرة" : "إضافة محاضرة جديدة"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">العنوان <span className="text-red-500">*</span></Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="عنوان المحاضرة"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mosque_name">اسم المسجد <span className="text-red-500">*</span></Label>
                <Input
                  id="mosque_name"
                  value={formData.mosque_name}
                  onChange={(e) => handleInputChange("mosque_name", e.target.value)}
                  placeholder="اسم المسجد"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">الوصف</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="وصف المحاضرة"
                className="min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">النوع <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.type.toString()}
                  onValueChange={(value) => handleInputChange("type", parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر النوع" />
                  </SelectTrigger>
                  <SelectContent>
                    {getLectureTypeOptions().map((option) => (
                      <SelectItem key={option.value} value={option.value.toString()}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recurrence">التكرار <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.recurrence.toString()}
                  onValueChange={(value) => handleInputChange("recurrence", parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر التكرار" />
                  </SelectTrigger>
                  <SelectContent>
                    {getRecurrenceTypeOptions().map((option) => (
                      <SelectItem key={option.value} value={option.value.toString()}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="day_of_week">اليوم <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.day_of_week.toString()}
                  onValueChange={(value) => handleInputChange("day_of_week", parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر اليوم" />
                  </SelectTrigger>
                  <SelectContent>
                    {getDayOfWeekOptions().map((option) => (
                      <SelectItem key={option.value} value={option.value.toString()}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">المدينة <span className="text-red-500">*</span></Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="المدينة"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location_url">رابط الموقع <span className="text-red-500">*</span></Label>
                <Input
                  id="location_url"
                  value={formData.location_url}
                  onChange={(e) => handleInputChange("location_url", e.target.value)}
                  placeholder="https://maps.google.com/..."
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="time_start">وقت البداية <span className="text-red-500">*</span></Label>
                <Input
                  id="time_start"
                  dir="ltr"
                  type="time"
                  value={formData.time_start}
                  onChange={(e) => handleInputChange("time_start", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time_end">وقت النهاية <span className="text-red-500">*</span></Label>
                <Input
                  id="time_end"
                  dir="ltr"
                  type="time"
                  value={formData.time_end}
                  onChange={(e) => handleInputChange("time_end", e.target.value)}
                  required
                />
              </div>
            </div>

            <ImageUpload
              label="صورة المسجد"
              value={imagePreview}
              onChange={(file) => {
                if (file) {
                  const validationError = LectureService.validateImageFile(file)
                  if (validationError) {
                    setError(validationError)
                    return
                  }
                  
                  setFormData(prev => ({ ...prev, image: file }))
                  
                  // Create preview
                  const reader = new FileReader()
                  reader.onload = (e) => {
                    setImagePreview(e.target?.result as string)
                  }
                  reader.readAsDataURL(file)
                  setError(null)
                }
              }}
              onRemove={() => {
                setFormData(prev => ({ ...prev, image: undefined }))
                setImagePreview(editingLecture?.image_link || null)
              }}
              required={!editingLecture}
              error={error}
            />

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeDialog}>
                إلغاء
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? "جاري الحفظ..." : (editingLecture ? "تحديث" : "إضافة")}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog"
import { Edit2, Phone, Mail, User, Globe } from "lucide-react"

interface AdminInfo {
  fullName: string
  email: string
  phone: string
  website: string
  address: string
}

export default function SettingsPage() {
  const [adminInfo, setAdminInfo] = useState<AdminInfo>({
    fullName: "أحمد منير",
    email: "admin@buildourselves.com", 
    phone: "+90 555 123 4567",
    website: "https://buildourselves.com",
    address: "اسطنبول، تركيا"
  })

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState<AdminInfo>(adminInfo)

  const handleInputChange = (field: keyof AdminInfo, value: string) => {
    setEditFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAdminInfo(editFormData)
    setIsEditDialogOpen(false)
  }

  const handleEdit = () => {
    setEditFormData(adminInfo)
    setIsEditDialogOpen(true)
  }

  const settingsCards = [
    {
      title: "المعلومات الشخصية",
      icon: User,
      items: [
        { label: "الاسم الكامل", value: adminInfo.fullName, icon: User },
        { label: "البريد الإلكتروني", value: adminInfo.email, icon: Mail },
        { label: "رقم الهاتف", value: adminInfo.phone, icon: Phone },
      ]
    },
    {
      title: "معلومات الموقع",
      icon: Globe,
      items: [
        { label: "رابط الموقع", value: adminInfo.website, icon: Globe },
        { label: "العنوان", value: adminInfo.address, icon: User },
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">الإعدادات</h2>
          <p className="text-muted-foreground">إدارة معلومات الحساب والموقع</p>
        </div>
        <Button onClick={handleEdit} className="gap-2">
          <Edit2 className="h-4 w-4" />
          تعديل المعلومات
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {settingsCards.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <card.icon className="h-5 w-5" />
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {card.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Account Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>إحصائيات الحساب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24</div>
              <div className="text-sm text-muted-foreground">مسجد مسجل</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950/20">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">12,543</div>
              <div className="text-sm text-muted-foreground">إجمالي الزيارات</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">89</div>
              <div className="text-sm text-muted-foreground">رسالة جديدة</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Settings */}
      {/* <Card>
        <CardHeader>
          <CardTitle>إعدادات النظام</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p className="text-sm font-medium">إشعارات البريد الإلكتروني</p>
              <p className="text-sm text-muted-foreground">تلقي إشعارات عند وصول رسائل جديدة</p>
            </div>
            <Button variant="outline" size="sm">
              تفعيل
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p className="text-sm font-medium">النسخ الاحتياطي التلقائي</p>
              <p className="text-sm text-muted-foreground">إنشاء نسخ احتياطية يومية من البيانات</p>
            </div>
            <Button variant="outline" size="sm">
              تفعيل
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p className="text-sm font-medium">إحصائيات التحليلات</p>
              <p className="text-sm text-muted-foreground">تتبع زيارات الموقع والتفاعل</p>
            </div>
            <Button variant="outline" size="sm">
              تفعيل
            </Button>
          </div>
        </CardContent>
      </Card> */}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>تعديل المعلومات</DialogTitle>
            <DialogClose onClose={() => setIsEditDialogOpen(false)} />
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">الاسم الكامل</Label>
              <Input
                id="fullName"
                value={editFormData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="أدخل الاسم الكامل"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={editFormData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="أدخل البريد الإلكتروني"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                value={editFormData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="أدخل رقم الهاتف"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">رابط الموقع</Label>
              <Input
                id="website"
                type="url"
                value={editFormData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                placeholder="أدخل رابط الموقع"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">العنوان</Label>
              <Input
                id="address"
                value={editFormData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="أدخل العنوان"
                required
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                إلغاء
              </Button>
              <Button type="submit">
                حفظ التغييرات
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

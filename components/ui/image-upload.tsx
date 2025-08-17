import React from "react"
import { Upload, X, Image as ImageIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ImageUploadProps {
  label: string
  value?: string | null
  onChange: (file: File | null) => void
  onRemove: () => void
  accept?: string
  maxSize?: number
  required?: boolean
  error?: string | null
}

export default function ImageUpload({
  label,
  value,
  onChange,
  onRemove,
  accept = "image/jpeg,image/png,image/webp",
  maxSize = 5,
  required = false,
  error
}: ImageUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isDragOver, setIsDragOver] = React.useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = e.dataTransfer.files
    if (files && files[0]) {
      onChange(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange(file)
    }
  }

  const handleBrowseClick = () => {
    inputRef.current?.click()
  }

  const handleRemoveImage = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    onRemove()
  }

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      
      {value ? (
        // Image preview with remove option
        <div className="relative group">
          <div className="relative w-full h-48 rounded-lg border-2 border-dashed border-gray-200 overflow-hidden">
            <Image
              src={value}
              alt="معاينة الصورة"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={handleBrowseClick}
                  className="bg-white/90 hover:bg-white text-gray-800"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  تغيير الصورة
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={handleRemoveImage}
                  className="bg-red-500/90 hover:bg-red-600"
                >
                  <X className="h-4 w-4 mr-2" />
                  حذف
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Upload area
        <div
          className={`
            relative w-full h-48 rounded-lg border-2 border-dashed transition-all duration-200 cursor-pointer
            ${isDragOver 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100'
            }
            ${error ? 'border-red-300 bg-red-50' : ''}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className={`
              w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-200
              ${isDragOver ? 'bg-blue-100' : 'bg-gray-200'}
            `}>
              <ImageIcon className={`
                h-8 w-8 transition-colors duration-200
                ${isDragOver ? 'text-blue-600' : 'text-gray-500'}
              `} />
            </div>
            
            <p className={`
              text-lg font-medium mb-2 transition-colors duration-200
              ${isDragOver ? 'text-blue-700' : 'text-gray-700'}
            `}>
              اسحب وأفلت الصورة هنا
            </p>
            
            <p className="text-sm text-gray-500 mb-4">أو</p>
            
            <Button
              type="button"
              variant="outline"
              className={`
                transition-all duration-200
                ${isDragOver 
                  ? 'border-blue-400 text-blue-700 bg-blue-50 hover:bg-blue-100' 
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                }
              `}
              onClick={handleBrowseClick}
            >
              <Upload className="h-4 w-4 mr-2" />
              تصفح الملفات
            </Button>
          </div>
        </div>
      )}
      
      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {/* Info text */}
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>الأنواع المدعومة: JPEG, PNG, WebP</span>
        <span>الحد الأقصى: {maxSize} ميجابايت</span>
      </div>
    </div>
  )
}

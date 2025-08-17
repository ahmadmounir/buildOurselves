// Database types for Supabase
export interface Database {
  public: {
    Tables: {
      lectures: {
        Row: {
          id: number
          created_at: string
          title: string
          description: string | null
          type: number
          recurrence: number
          day_of_week: number
          mosque_name: string
          city: string
          location_url: string
          time_start: string
          time_end: string
          image_link: string
          image_path: string
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          description?: string | null
          type: number
          recurrence: number
          day_of_week: number
          mosque_name: string
          city: string
          location_url: string
          time_start: string
          time_end: string
          image_link: string
          image_path: string
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          description?: string | null
          type?: number
          recurrence?: number
          day_of_week?: number
          mosque_name?: string
          city?: string
          location_url?: string
          time_start?: string
          time_end?: string
          image_link?: string
          image_path?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

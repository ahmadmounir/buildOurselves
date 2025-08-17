import { supabase } from '@/lib/supabase';
import { Lecture, LectureFormData } from '@/models/lecture';

export class LectureService {
  private static readonly BUCKET_NAME = 'lecture-images';

  // Get all lectures
  static async getAllLectures(): Promise<Lecture[]> {
    const { data, error } = await supabase
      .from('lectures')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch lectures: ${error.message}`);
    }

    return data || [];
  }

  // Get lecture by ID
  static async getLectureById(id: number): Promise<Lecture | null> {
    const { data, error } = await supabase
      .from('lectures')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Not found
      }
      throw new Error(`Failed to fetch lecture: ${error.message}`);
    }

    return data;
  }

  // Upload image to Supabase storage
  static async uploadImage(file: File): Promise<{ publicUrl: string; path: string }> {
    // 1) Ensure user is logged in (optional UI guard; RLS is the real guard)
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('You must be signed in to upload');

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const path = `public/images/${crypto.randomUUID()}.${ext}`; // ✅ no leading slash, has folder(s)

    const { error } = await supabase
        .storage
        .from(this.BUCKET_NAME)
        .upload(path, file, { contentType: file.type, upsert: false });

    if (error) throw new Error(`Failed to upload image: ${error.message}`);

    const { data: { publicUrl } } =
        supabase.storage.from(this.BUCKET_NAME).getPublicUrl(path);

    return { publicUrl, path };
    }

  // Delete image from Supabase storage
  static async deleteImage(imagePath: string): Promise<void> {
    try {
      if (!imagePath) return;

      const { error } = await supabase.storage
        .from(this.BUCKET_NAME)
        .remove([imagePath]);

      if (error) {
        console.error('Failed to delete image:', error.message);
        // Don't throw error for image deletion failure
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }

  // Create new lecture
  static async createLecture(formData: LectureFormData): Promise<Lecture> {
    let imageUrl = '';
    let imagePath = '';

    // Upload image if provided
    if (formData.image) {
      const uploadResult = await this.uploadImage(formData.image);
      imageUrl = uploadResult.publicUrl;
      imagePath = uploadResult.path;
    }

    const lectureData = {
      title: formData.title,
      description: formData.description || null,
      type: formData.type,
      recurrence: formData.recurrence,
      day_of_week: formData.day_of_week,
      mosque_name: formData.mosque_name,
      city: formData.city,
      location_url: formData.location_url,
      time_start: formData.time_start,
      time_end: formData.time_end,
      image_link: imageUrl,
      image_path: imagePath
    };

    const { data, error } = await supabase
      .from('lectures')
      .insert([lectureData])
      .select()
      .single();

    if (error) {
      // If lecture creation fails, delete the uploaded image
      if (imagePath) {
        await this.deleteImage(imagePath);
      }
      throw new Error(`Failed to create lecture: ${error.message}`);
    }

    return data;
  }

  // Update existing lecture
  static async updateLecture(id: number, formData: LectureFormData, currentImageUrl?: string, currentImagePath?: string): Promise<Lecture> {
    let imageUrl = currentImageUrl || '';
    let imagePath = currentImagePath || '';

    // Upload new image if provided
    if (formData.image) {
      const uploadResult = await this.uploadImage(formData.image);
      
      // Delete old image if it exists
      if (currentImagePath) {
        await this.deleteImage(currentImagePath);
      }
      
      imageUrl = uploadResult.publicUrl;
      imagePath = uploadResult.path;
    }

    const lectureData = {
      title: formData.title,
      description: formData.description || null,
      type: formData.type,
      recurrence: formData.recurrence,
      day_of_week: formData.day_of_week,
      mosque_name: formData.mosque_name,
      city: formData.city,
      location_url: formData.location_url,
      time_start: formData.time_start,
      time_end: formData.time_end,
      image_link: imageUrl,
      image_path: imagePath
    };

    const { data, error } = await supabase
      .from('lectures')
      .update(lectureData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      // If update fails and we uploaded a new image, delete it
      if (formData.image && imagePath !== currentImagePath) {
        await this.deleteImage(imagePath);
      }
      throw new Error(`Failed to update lecture: ${error.message}`);
    }

    return data;
  }

  // Delete lecture
  static async deleteLecture(id: number): Promise<void> {
    // First get the lecture to get the image path
    const lecture = await this.getLectureById(id);
    
    const { error } = await supabase
      .from('lectures')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to delete lecture: ${error.message}`);
    }

    // Delete associated image using path
    if (lecture?.image_path) {
      await this.deleteImage(lecture.image_path);
    }
  }

  // Get statistics for dashboard
  static async getStatistics(): Promise<{
    uniqueMosques: number;
    totalCities: number;
  }> {
    try {
      // Get all lectures to calculate statistics
      const { data: lectures, error } = await supabase
        .from('lectures')
        .select('mosque_name, city');

      if (error) {
        throw new Error(`Failed to fetch statistics: ${error.message}`);
      }

      const lecturesData = lectures || [];
      
      // Calculate unique mosques
      const uniqueMosques = new Set(lecturesData.map(lecture => lecture.mosque_name)).size;
      
      // Calculate unique cities
      const uniqueCities = new Set(lecturesData.map(lecture => lecture.city)).size;

      return {
        uniqueMosques,
        totalCities: uniqueCities
      };
    } catch (error) {
      console.error('Error fetching statistics:', error);
      return {
        uniqueMosques: 0,
        totalCities: 0
      };
    }
  }

  // Validate image file
  static validateImageFile(file: File): string | null {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      return 'نوع الملف غير مدعوم. يرجى اختيار صورة بصيغة JPEG أو PNG أو WebP.';
    }

    if (file.size > maxSize) {
      return 'حجم الملف كبير جداً. الحد الأقصى هو 5 ميجابايت.';
    }

    return null;
  }
}

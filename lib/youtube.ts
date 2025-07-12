export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
  viewCount: string;
}

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch('/api/youtube');
    const data = await response.json();

    console.log(data)

    if (data.error) {
      throw new Error(data.error);
    }

    return data.videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    // Return static data as fallback
    return [];
  }
} 
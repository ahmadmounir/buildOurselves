import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const youtube = google.youtube('v3');

// YouTube video IDs
const VIDEO_IDS = [
  "1VLGCiOScLc",
  "brPNA4zBUZk",
  "RO1aBFAUd78",
  "QtninmgfqsI",
  "w7_vMIEB7JU"
];

function parseDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
  const hours = (match?.[1] || '').replace('H', '');
  const minutes = (match?.[2] || '').replace('M', '');
  const seconds = (match?.[3] || '').replace('S', '');

  let result = '';
  if (hours) result += `${hours}:`;
  result += `${minutes.padStart(2, '0')}:`;
  result += seconds.padStart(2, '0');

  return result;
}

export async function GET() {
  if (!process.env.YOUTUBE_API_KEY) {
    return NextResponse.json(
      { error: 'YouTube API key is not configured' },
      { status: 500 }
    );
  }

  try {
    const videoResponse = await youtube.videos.list({
      key: process.env.YOUTUBE_API_KEY,
      id: VIDEO_IDS,
      part: ['snippet', 'contentDetails', 'statistics']
    });

    if (!videoResponse.data.items) {
      return NextResponse.json({ videos: [] });
    }

    const videos = videoResponse.data.items.map(video => ({
      id: video.id!,
      title: video.snippet!.title!,
      thumbnail: video.snippet!.thumbnails!.maxres?.url || 
                video.snippet!.thumbnails!.high?.url || 
                `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
      duration: parseDuration(video.contentDetails!.duration!),
      publishedAt: video.snippet!.publishedAt!,
      viewCount: video.statistics!.viewCount
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
} 